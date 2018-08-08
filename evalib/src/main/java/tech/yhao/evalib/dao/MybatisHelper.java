package tech.yhao.evalib.dao;

import java.io.IOException;
import java.io.Reader;
import java.util.Properties;

import org.apache.ibatis.io.Resources;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.apache.ibatis.session.SqlSessionFactoryBuilder;

import tech.yhao.evalib.dao.UserMapper;

public class MybatisHelper {

	private static SqlSessionFactory sqlSessionFactory;

	static {
		try {
			Reader reader = Resources.getResourceAsReader("mybatis/mybatis-config.xml");
			sqlSessionFactory = new SqlSessionFactoryBuilder().build(reader);
			reader.close();
		} catch (IOException ex) {
			ex.printStackTrace();
		}
	}

	public static SqlSession getSession() throws Exception {
		if (sqlSessionFactory == null) {
			throw new Exception("Failed to initialize the SqlSessionFactory");
		}

		return sqlSessionFactory.openSession();
	}

}
