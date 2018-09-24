var store = [{
        "title": "Working with AWS credentials on macOS",
        "excerpt":"Check credentials $ aws configure listAdd credentials $ nano ~/.aws/credentials[default]aws_access_key_id=&lt;…&gt;aws_secret_access_key=&lt;…&gt;","categories": ["DevOps"],
        "tags": ["AWS","macOS"],
        "url": "https://vyspiansky.github.io/pages/vyspiansky/2018/03/01/aws-credentials/",
        "teaser":null},{
        "title": "Next AUTO_INCREMENT value",
        "excerpt":"To get the next AUTO_INCREMENT value from a table run the following query: SELECT AUTO_INCREMENTFROM information_schema.TABLESWHERE TABLE_SCHEMA = \"databaseName\"AND TABLE_NAME = \"tableName\"","categories": ["DevOps"],
        "tags": ["AUTO_INCREMENT","MySQL"],
        "url": "https://vyspiansky.github.io/pages/vyspiansky/2018/03/01/next-auto-increment/",
        "teaser":null},{
        "title": "PHP 7 Compatibility Checker (php7cc)",
        "excerpt":"$ apk add php7-phar$ composer global require sstalle/php7cc$ php composer.phar global require sstalle/php7cc$ export PATH=\"$PATH:$HOME/.composer/vendor/bin\"$ php7cc /path/to/file.phpSource URL: https://github.com/sstalle/php7cc ","categories": ["PHP"],
        "tags": ["PHP 7","Alpine Linux","php7cc"],
        "url": "https://vyspiansky.github.io/pages/vyspiansky/2018/03/01/php-7-compatibility-checker/",
        "teaser":null},{
        "title": "How to reload Nginx on Alpine Linux",
        "excerpt":"$ nginx -s reload -c /conf/nginx/nginx.conf","categories": ["DevOps"],
        "tags": ["Nginx","Alpine Linux"],
        "url": "https://vyspiansky.github.io/pages/vyspiansky/2018/03/01/reload-nginx-on-alpine/",
        "teaser":null},{
        "title": "Install AWS CLI on macOS",
        "excerpt":"Easiest way to install AWS CLI $ brew install awscliSee more http://www.chrisjmendez.com/2017/02/18/aws-installing-aws-client-using-homebrew/ A bit longer way… $ brew install python3$ python3 --version$ sudo mkdir /usr/local/Frameworks$ sudo chown $(whoami):admin /usr/local/Frameworks$ brew link pythonError: pip3: command not found $ brew postinstall python3$ pip3 --versionURL: https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html ","categories": ["DevOps"],
        "tags": ["AWS CLI","Mac","AWS"],
        "url": "https://vyspiansky.github.io/pages/vyspiansky/2018/03/17/install-aws-cli-on-macos/",
        "teaser":null},{
        "title": "Launch Sublime Text 3 from the terminal",
        "excerpt":"$ echo $PATHOutput: /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin Create a symbolic link $ ln -s \"/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl\" /usr/local/bin/sublTo open the entire current directory $ subl .","categories": ["Mac"],
        "tags": ["command line","terminal","Sublime Text"],
        "url": "https://vyspiansky.github.io/pages/vyspiansky/2018/08/30/launch-sublime-text-3-terminal/",
        "teaser":null}]
