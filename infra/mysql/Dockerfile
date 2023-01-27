FROM mysql/mysql-server:8.0

ENV MYSQL_DATABASE=travel_memo \
  MYSQL_USER=phper \
  MYSQL_PASSWORD=pass5241 \
  MYSQL_ROOT_PASSWORD=pass5241 \
  TZ=Asia/Tokyo

COPY ./my.cnf /etc/my.cnf
RUN chmod 644 /etc/my.cnf