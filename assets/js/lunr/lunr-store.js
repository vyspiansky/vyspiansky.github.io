var store = [{
        "title": "How to add email to MailChimp list using WordPress",
        "excerpt":"&lt;?php$apiKey = 'your API key';$dc     = 'MailChimp data center, for example, \"us6\"';$listId = 'your list id';$email  = 'some@email.here';$url = \"https://{$dc}.api.mailchimp.com/2.0/lists/subscribe.json\";$request = wp_remote_post($url, [    'body' =&gt; json_encode([        'apikey' =&gt; $apiKey,        'id'     =&gt; $listId,        'email'  =&gt; ['email' =&gt; $email],    ]),]);$result = json_decode(wp_remote_retrieve_body($request));// some kind of check here ...","categories": ["WordPress"],
        "tags": ["MailChimp"],
        "url": "https://vyspiansky.github.io/2017/03/10/how-to-add-email-to-mailchimp-list-using-wordpress/",
        "teaser":null},{
        "title": "Make a Zip Archive without a .DS_Store file on macOS",
        "excerpt":"Let’s compress folder (current one) without the .DS_Store file zip -r &lt;name&gt;.zip . -x \"*.DS_Store\"Note! .DS_Store is a file that stores custom attributes of its containing folder, such as the position of icons or the choice of a background image. ","categories": ["Mac"],
        "tags": ["Zip","macOS","terminal"],
        "url": "https://vyspiansky.github.io/2017/04/07/zip-archive-without-ds-store-macos/",
        "teaser":null},{
        "title": "Create MySQL dump on EC2 instance and download it",
        "excerpt":"We’re going to create a MySQL dump on an EC2 instance, compress and download this file to our local (Mac) machine. First of all let’s connect to the instance using a ssh command: ssh -i \"/path/to/your/*.pem\" &lt;EC2_USERNAME&gt;@&lt;PUBLIC_DNS_NAME&gt;where   /path/to/your/*.pem is the location where the PEM key is stored.  EC2_USERNAME is the username you log in with. If you used Amazon Linux 2 or the Amazon Linux AMI, the user name is ec2-user.  PUBLIC_DNS_NAME is the IP or DNS alias of the instance.Then use the mysqldump utility to export a dump file from the database: mysqldump -h &lt;AMAZONAWS_RDS_HOST&gt; -u &lt;USER_NAME&gt; -p &lt;DB_NAME&gt; &gt; &lt;BACKUP_NAME&gt;.sqlThis file can be compressed gzip -f &lt;BACKUP_NAME&gt;.sqlNote! -f option forcefully compresses a file named &lt;BACKUP_NAME&gt;.sql even if there already exists a file named as &lt;BACKUP_NAME&gt;.sql.gz. Use scp to download the backup file from the EC2 instance to your local machine: scp -i \"/path/to/your/*.pem\" &lt;EC2_USERNAME&gt;@&lt;PUBLIC_DNS_NAME&gt;:/path/to/your/backup ~/Downloads/Note! scp means “secure copy”, which can copy files between computers on a network. If needed the backup file can be removed on the EC2 instance: rm &lt;BACKUP_NAME&gt;.sql.gz","categories": ["DevOps","Databases"],
        "tags": ["SSH","MySQL","EC2","scp","Amazon","mysqldump","macOS","terminal"],
        "url": "https://vyspiansky.github.io/2017/05/15/download-ec2-mysql-dump-to-local-machine/",
        "teaser":null},{
        "title": "SSH keys are lost after macOS High Sierra reboot",
        "excerpt":"To list all keys run ssh-add -lRe-import your SSH key ssh-add -K ~/.ssh/id_rsaAdd the following to your ~/.ssh/config file: Host *   AddKeysToAgent yes   UseKeychain yesSource: macOS Sierra doesn’t seem to remember SSH keys between reboots ","categories": ["Mac"],
        "tags": ["AWS","macOS","SSH","SSH key"],
        "url": "https://vyspiansky.github.io/2017/07/28/ssh-keys-are-lost-after-macos-reboot/",
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
        "excerpt":"If you get the following error with npm install  xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory'/Library/Developer/CommandLineTools' is a command line tools instancethen to fix it try   (optional) Install Xcode - go to the AppStore and download the Xcode.  Point the xcode-select developer directory to the appropriate directory from within Xcode.app. To do this, runsudo xcode-select -s /Applications/Xcode.app/Contents/Developer","categories": ["Mac"],
        "tags": ["command line","terminal","Xcode"],
        "url": "https://vyspiansky.github.io/2018/09/28/xcodebuild-requires-xcode/",
        "teaser":null},{
        "title": "Set up PHP 7.2 on macOS Mojave (with homebrew)",
        "excerpt":"To check the version of PHP in the terminal, type the following command: php -vor can see what versions of PHP are installed with  brew list | grep phpMaybe it’s worth cleaning up some of the old packages from brew. It’s up to you. Make sure brew is up to date: brew updatebrew upgradeLet’s finally install 7.2 version of PHP brew install php@7.2If you need to have this version of PHP first in your PATH run the following command: echo 'export PATH=\"/usr/local/opt/php@7.2/bin:$PATH\"' &gt;&gt; ~/.bash_profileecho 'export PATH=\"/usr/local/opt/php@7.2/sbin:$PATH\"' &gt;&gt; ~/.bash_profilesource ~/.bash_profileAnd the result? php --versionWhere is a php.ini file? Your .ini file is located in /usr/local/etc/php/7.2/php.ini. To check just type php --iniHow to install extensions? PHP extensions have been removed and now should be installed from PECL: pecl install xdebug","categories": ["Mac"],
        "tags": ["command line","terminal","PHP","homebrew"],
        "url": "https://vyspiansky.github.io/2018/11/08/set-up-php-7.2-on-macos-mojave-with-homebrew/",
        "teaser":null},{
        "title": "How to fix imprecise calculations in JavaScript",
        "excerpt":"What is it about? Try to execute some of the following examples in the browser console (or somehow using JavaScript) and you will see that sometimes there are small computational errors. Browser console output: &gt; 0.1 + 0.20.30000000000000004&gt; 0.1 * 0.20.020000000000000004&gt; 16.08 * 1001607.9999999999998&gt; 0.1.toFixed(20)\"0.10000000000000000555\"&gt; 999999999999999910000000000000000Don’t get me wrong, this is certainly not a problem of the language itself. The same thing happens in Java, C, PHP, Ruby, etc. If you are interested in the details, please read more in this article. Below you will find the simplest solutions that allow to “fix” this inaccuracy. Solution #1 Let’s use the toPrecision method to format a number to a specified precision. // Pedro Ladaria's solutionfunction strip(number) {    return (parseFloat(number.toPrecision(12)));}Browser console: &gt; strip(0.1 + 0.2);0.3&gt; strip(0.1 * 0.2);0.02&gt; strip(16.08 * 100);1608Solution #2 Let’s format a number using fixed-point notation into a string with 2 (up to 20) digits after the decimal point using the toFixed method. Browser console: &gt; (0.1 + 0.2).toFixed(2)\"0.30\"&gt; (0.1 * 0.2).toFixed(2)\"0.02\"&gt; (16.08 * 100).toFixed(2)\"1608.00\"It’s not hard to get a number as a return value. For instance, &gt; parseFloat((0.1 + 0.2).toFixed(2))0.3","categories": ["JavaScript"],
        "tags": ["calculation","parseFloat","toFixed"],
        "url": "https://vyspiansky.github.io/2019/01/20/imprecise-calculations-in-javascript/",
        "teaser":null}]
