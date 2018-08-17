package tech.yhao.evalib.mybatis.generator;

import java.io.File;
import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.apache.commons.io.FileUtils;
import org.mybatis.generator.api.MyBatisGenerator;
import org.mybatis.generator.config.Configuration;
import org.mybatis.generator.config.xml.ConfigurationParser;
import org.mybatis.generator.internal.DefaultShellCallback;

public class EvalibMybatisGenerator {

	public static void main(String[] args) {
		try {
			File file = new File("./generation-output");
			if (file.exists()) {
				FileUtils.cleanDirectory(file);
			} else {
				file.mkdir();
			}

			List<String> warnings = new ArrayList<String>();
			boolean overwrite = true;
			InputStream inputStream = EvalibMybatisGenerator.class.getClassLoader()
					.getResourceAsStream("generatorConfig.xml");
			ConfigurationParser cp = new ConfigurationParser(warnings);
			Configuration config = cp.parseConfiguration(inputStream);
			DefaultShellCallback callback = new DefaultShellCallback(overwrite);
			MyBatisGenerator myBatisGenerator = new MyBatisGenerator(config, callback, warnings);
			myBatisGenerator.generate(null);

			System.out.print("Generator run completed");
		} catch (Exception ex) {
			ex.printStackTrace();
		}
	}
}
