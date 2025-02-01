set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
	CREATE USER postgres;
	CREATE DATABASE software_store_dev;
	GRANT ALL PRIVILEGES ON DATABASE software_store_dev TO postgres;
EOSQL
