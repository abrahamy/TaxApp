#!/bin/sh

ROOT=/home/django/TaxApp
GUNICORN=$ROOT/virtualenv/bin/gunicorn
PID=$ROOT/deploy/gunicorn.pid
GUNICORN_CONF=$ROOT/deploy/gunicorn.conf.py

APP=main:application

if [ -f $PID ]; then rm $PID; fi

cd $ROOT
source $ROOT/.env
exec $GUNICORN -c $GUNICORN_CONF --pid=$PID $APP