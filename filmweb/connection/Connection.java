package info.talacha.filmweb.connection;

import java.io.IOException;
import java.io.InputStream;
import java.io.Serializable;
import java.net.HttpURLConnection;
import java.net.URL;

/**
 * Połączenie z FW 
 * @author Paweł Talacha
 */
public class Connection implements Serializable, AutoCloseable {
	
	private static final long serialVersionUID = -1844137797693911015L;
	private final String USER_AGENT = "Mozilla/5.0 (Linux; Android 4.1.1; Galaxy Nexus Build/JRO03C) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.166 Mobile Safari/535.19";
	private final HttpURLConnection con;
	
	public Connection(String urlStr, HttpMethod method) throws IOException {
		URL url = new URL(urlStr);
		con = (HttpURLConnection) url.openConnection();
		con.setRequestMethod(method.toString());
		con.setRequestProperty("User-Agent", USER_AGENT);
		con.connect();
	}
	
	public InputStream getInputStream() throws IOException {
		return con.getInputStream();
	}

	@Override
	public void close() throws Exception {
		getInputStream().close();
	}

}