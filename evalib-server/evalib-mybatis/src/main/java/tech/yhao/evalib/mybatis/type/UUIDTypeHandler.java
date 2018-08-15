package tech.yhao.evalib.mybatis.type;

import java.sql.CallableStatement;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.UUID;

import org.apache.ibatis.type.BaseTypeHandler;
import org.apache.ibatis.type.JdbcType;
import org.apache.ibatis.type.MappedJdbcTypes;

/**
 * UUID type handler. Mybatis does not support UUID, need to register this type
 * handler in mybatis-config.xml
 * 
 * @author TaoJn
 *
 */
@MappedJdbcTypes(JdbcType.VARCHAR)
public class UUIDTypeHandler extends BaseTypeHandler<UUID> {

	@Override
	public void setNonNullParameter(PreparedStatement ps, int i, UUID parameter, JdbcType jdbcType)
			throws SQLException {
		ps.setObject(i, parameter);
	}

	@Override
	public UUID getNullableResult(ResultSet rs, String columnName) throws SQLException {
		String value = rs.getString(columnName);
		if (value != null) {
			return UUID.fromString(value);
		}

		return null;
	}

	@Override
	public UUID getNullableResult(ResultSet rs, int columnIndex) throws SQLException {
		String value = rs.getString(columnIndex);
		if (value != null) {
			return UUID.fromString(value);
		}

		return null;
	}

	@Override
	public UUID getNullableResult(CallableStatement cs, int columnIndex) throws SQLException {
		String value = cs.getString(columnIndex);
		if (value != null) {
			return UUID.fromString(value);
		}

		return null;
	}

}
