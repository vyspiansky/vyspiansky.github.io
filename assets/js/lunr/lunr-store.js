var store = [{
        "title": "How to add email to MailChimp list using WordPress",
        "excerpt":"&lt;?php$apiKey = 'your API key';$dc     = 'MailChimp data center, for example, \"us6\"';$listId = 'your list id';$email  = 'some@email.here';$url = \"https://{$dc}.api.mailchimp.com/2.0/lists/subscribe.json\";$request = wp_remote_post($url, [    'body' =&gt; json_encode([        'apikey' =&gt; $apiKey,        'id'     =&gt; $listId,        'email'  =&gt; ['email' =&gt; $email],    ]),]);$result = json_decode(wp_remote_retrieve_body($request));// some kind of check here ...","categories": ["WordPress"],
        "tags": ["MailChimp"],
        "url": "https://vyspiansky.github.io/2017/03/10/how-to-add-email-to-mailchimp-list-using-wordpress/",
        "teaser":null},{
        "title": "Working with AWS credentials on macOS",
        "excerpt":"Check credentials $ aws configure listAdd credentials $ nano ~/.aws/credentials[default]aws_access_key_id=&lt;…&gt;aws_secret_access_key=&lt;…&gt;","categories": ["DevOps"],
        "tags": ["AWS","macOS"],
        "url": "https://vyspiansky.github.io/2018/03/01/aws-credentials/",
        "teaser":null},{
        "title": "Next AUTO_INCREMENT value",
        "excerpt":"To get the next AUTO_INCREMENT value from a table run the following query: SELECT AUTO_INCREMENTFROM information_schema.TABLESWHERE TABLE_SCHEMA = \"databaseName\"AND TABLE_NAME = \"tableName\"","categories": ["Databases"],
        "tags": ["AUTO_INCREMENT","MySQL"],
        "url": "https://vyspiansky.github.io/2018/03/01/next-auto-increment/",
        "teaser":null},{
        "title": "PHP 7 Compatibility Checker (php7cc)",
        "excerpt":"$ apk add php7-phar$ composer global require sstalle/php7cc$ php composer.phar global require sstalle/php7cc$ export PATH=\"$PATH:$HOME/.composer/vendor/bin\"$ php7cc /path/to/file.phpSource URL: https://github.com/sstalle/php7cc ","categories": ["PHP"],
        "tags": ["PHP 7","Alpine Linux","php7cc"],
        "url": "https://vyspiansky.github.io/2018/03/01/php-7-compatibility-checker/",
        "teaser":null},{
        "title": "How to reload Nginx on Alpine Linux",
        "excerpt":"$ nginx -s reload -c /conf/nginx/nginx.conf","categories": ["DevOps"],
        "tags": ["Nginx","Alpine Linux"],
        "url": "https://vyspiansky.github.io/2018/03/01/reload-nginx-on-alpine/",
        "teaser":null},{
        "title": "Install AWS CLI on macOS",
        "excerpt":"Easiest way to install AWS CLI $ brew install awscliSee more http://www.chrisjmendez.com/2017/02/18/aws-installing-aws-client-using-homebrew/ A bit longer way… $ brew install python3$ python3 --version$ sudo mkdir /usr/local/Frameworks$ sudo chown $(whoami):admin /usr/local/Frameworks$ brew link pythonError: pip3: command not found $ brew postinstall python3$ pip3 --versionURL: https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html ","categories": ["DevOps"],
        "tags": ["AWS CLI","Mac","AWS"],
        "url": "https://vyspiansky.github.io/2018/03/17/install-aws-cli-on-macos/",
        "teaser":null},{
        "title": "Launch Sublime Text 3 from the terminal",
        "excerpt":"$ echo $PATHOutput: /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin Create a symbolic link $ ln -s \"/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl\" /usr/local/bin/sublTo open the entire current directory $ subl .","categories": ["Mac"],
        "tags": ["command line","terminal","Sublime Text"],
        "url": "https://vyspiansky.github.io/2018/08/30/launch-sublime-text-3-terminal/",
        "teaser":null},{
        "title": "Error: tool 'xcodebuild' requires Xcode... on macOS",
        "excerpt":"If you get the following error with npm install  xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory'/Library/Developer/CommandLineTools' is a command line tools instancethen to fix it try (optional) Install Xcode - go to the AppStore and download the Xcode https://itunes.apple.com/us/app/xcode/id497799835 Point the xcode-select developer directory to the appropriate directory from within Xcode.app. To do this, runsudo xcode-select -s /Applications/Xcode.app/Contents/Developer...","categories": ["Mac"],
        "tags": ["command line","terminal","Xcode"],
        "url": "https://vyspiansky.github.io/2018/09/28/xcodebuild-requires-xcode/",
        "teaser":null}]
