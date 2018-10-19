#! /bin/bash -e

# if `docker run` first argument start with `--` the user is passing evalib launcher arguments
if [[ $# -lt 1 ]] || [[ "$1" == "--"* ]]; then

  # read JAVA_OPTS and EVALIB_OPTS into arrays to avoid need for eval (and associated vulnerabilities)
  java_opts_array=()
  while IFS= read -r -d '' item; do
    java_opts_array+=( "$item" )
  done < <([[ $JAVA_OPTS ]] && xargs printf '%s\0' <<<"$JAVA_OPTS")

  if [[ "$DEBUG" ]] ; then
    java_opts_array+=( \
      '-Xdebug' \
      '-Xrunjdwp:server=y,transport=dt_socket,address=5005,suspend=y' \
    )
  fi

  evalib_opts_array=( )
  while IFS= read -r -d '' item; do
    evalib_opts_array+=( "$item" )
  done < <([[ $EVALIB_OPTS ]] && xargs printf '%s\0' <<<"$EVALIB_OPTS")

  exec java -Duser.home="$EVALIB_HOME" "${java_opts_array[@]}" -jar ${EVALIB_SERVICE_JAR} "${evalib_opts_array[@]}" "$@"
fi