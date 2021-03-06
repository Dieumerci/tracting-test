Geocoder.configure(
  # Geocoding options
  timeout: 3,                 # geocoding service timeout (secs)
  lookup: :google,         # name of geocoding service (symbol)
  # ip_lookup: :freegeoip,      # name of IP address geocoding service (symbol)
  use_https: true,
  api_key: ENV['GOOGLE_MAP_API_KEY'],
  # cache: nil,                 # cache object (must respond to #[], #[]=, and #del)
  # cache_prefix: 'geocoder:',  # prefix (string) to use for all cache keys

  # Exceptions that should not be rescued by default
  # (if you want to implement custom error handling);
  # supports SocketError and Timeout::Error
  # always_raise: [],

  # Calculation options
  units: :km,                 # :km for kilometers or :mi for miles
  # distances: :linear          # :spherical or :linear
)
