var store = [{
        "title": "How to add email to MailChimp list using WordPress",
        "excerpt":"&lt;?php  $apiKey = 'your API key'; $dc     = 'MailChimp data center, for example, \"us6\"'; $listId = 'your list id'; $email  = 'some@email.here';  $url = \"https://{$dc}.api.mailchimp.com/2.0/lists/subscribe.json\";  $request = wp_remote_post($url, [     'body' =&gt; json_encode([         'apikey' =&gt; $apiKey,         'id'     =&gt; $listId,         'email'  =&gt; ['email' =&gt; $email],     ]), ]);  $result = json_decode(wp_remote_retrieve_body($request));  // some kind of check here ...  ","categories": ["WordPress"],
        "tags": ["MailChimp"],
        "url": "/2017/03/10/how-to-add-email-to-mailchimp-list-using-wordpress/",
        "teaser": null
      },{
        "title": "Extra Ukrainian letters are not sorted well",
        "excerpt":"The problem is that Ukrainian letters are not sorted correctly by the alphabet, ie “і” and “є” are preceded by “а”, “б”, while using the ORDER BY operator in MySQL.   The possible reason is that a mistaken collation value has been used. To correctly sort the Ukrainian letters, the value must be utf8_unicode_ci.   Note! It’s worth pointing out that utf8_unicode_ci is more accurate than utf8_general_ci for Bulgarian, Belarusian, Macedonian, Russian, Serbian and Ukrainian languages. While utf8_general_ci is fine only for Russian and Bulgarian subset of Cyrillic.   We can specify the collation directly in a query   SELECT * FROM &lt;table_name&gt; ORDER BY &lt;column_name&gt; COLLATE utf8_unicode_ci;   or change it  permanently.   1) Сhange column collation:   ALTER TABLE &lt;table_name&gt; MODIFY &lt;column_name&gt; VARCHAR(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci;   2) Change table collation:   ALTER TABLE &lt;table_name&gt; CONVERT TO CHARACTER SET utf8 COLLATE utf8_unicode_ci;   3) Change database collation:   ALTER DATABASE &lt;db_name&gt; CHARACTER SET utf8 COLLATE utf8_unicode_ci;  ","categories": ["MySQL"],
        "tags": ["collation","utf8_unicode_ci","Cyrillic","ORDER BY"],
        "url": "/2017/03/10/utf-8-ukrainian-letters-sorting-in-mysql/",
        "teaser": null
      },{
        "title": "Make a Zip Archive without a .DS_Store file on macOS",
        "excerpt":"Let’s compress folder (current one) without the .DS_Store file   zip -r &lt;name&gt;.zip . -x \"*.DS_Store\"   Note! .DS_Store is a file that stores custom attributes of its containing folder, such as the position of icons or the choice of a background image.  ","categories": ["Mac"],
        "tags": ["Zip","macOS","terminal"],
        "url": "/2017/04/07/zip-archive-without-ds-store-macos/",
        "teaser": null
      },{
        "title": "Create MySQL dump on EC2 instance and download it",
        "excerpt":"We’re going to create a MySQL dump on an EC2 instance, compress and download this file to our local (Mac) machine.   First of all let’s connect to the instance using a ssh command:   ssh -i \"/path/to/your/*.pem\" &lt;EC2_USERNAME&gt;@&lt;PUBLIC_DNS_NAME&gt;   where      /path/to/your/*.pem is the location where the PEM key is stored.   EC2_USERNAME is the username you log in with. If you used Amazon Linux 2 or the Amazon Linux AMI, the user name is ec2-user.   PUBLIC_DNS_NAME is the IP or DNS alias of the instance.   Then use the mysqldump utility to export a dump file from the database:   mysqldump -h &lt;AMAZONAWS_RDS_HOST&gt; -u &lt;USER_NAME&gt; -p &lt;DB_NAME&gt; &gt; &lt;BACKUP_NAME&gt;.sql   This file can be compressed   gzip -f &lt;BACKUP_NAME&gt;.sql   Note! -f option forcefully compresses a file named &lt;BACKUP_NAME&gt;.sql even if there already exists a file named as &lt;BACKUP_NAME&gt;.sql.gz.   Use scp to download the backup file from the EC2 instance to your local machine:   scp -i \"/path/to/your/*.pem\" &lt;EC2_USERNAME&gt;@&lt;PUBLIC_DNS_NAME&gt;:/path/to/your/backup ~/Downloads/   Note! scp means “secure copy”, which can copy files between computers on a network.   If needed the backup file can be removed on the EC2 instance:   rm &lt;BACKUP_NAME&gt;.sql.gz  ","categories": ["DevOps","MySQL"],
        "tags": ["SSH","EC2","scp","Amazon","mysqldump","macOS","terminal"],
        "url": "/2017/05/15/download-ec2-mysql-dump-to-local-machine/",
        "teaser": null
      },{
        "title": "SSH keys are lost after macOS High Sierra reboot",
        "excerpt":"To list all keys run   ssh-add -l   Re-import your SSH key   ssh-add -K ~/.ssh/id_rsa   Add the following to your ~/.ssh/config file:   Host *    AddKeysToAgent yes    UseKeychain yes   Source: macOS Sierra doesn’t seem to remember SSH keys between reboots  ","categories": ["Mac"],
        "tags": ["AWS","macOS","SSH","SSH key"],
        "url": "/2017/07/28/ssh-keys-are-lost-after-macos-reboot/",
        "teaser": null
      },{
        "title": "Does a remote file exist (using get_headers)?",
        "excerpt":"As you probably know, a get_headers function in PHP typically returns something similar to:   Array (     [0] =&gt; HTTP/1.1 200 OK     [1] =&gt; Content-Type: image/png     [2] =&gt; Content-Length: 127999     [3] =&gt; Connection: close     [4] =&gt; Date: Thu, 09 Nov 2017 12:16:51 GMT     [5] =&gt; Last-Modified: Wed, 08 Nov 2017 09:12:17 GMT     ... )   Where the first element of the array contains a response status. With that in mind, let’s use it for our needs.   &lt;?php function remote_file_exists($url) {     $file_headers = get_headers($url);      $not_found_headers = [         'HTTP/1.1 404 Not Found',         'HTTP/1.0 404 Not Found',     ];      return !in_array($file_headers[0], $not_found_headers); }  $url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/100px-PHP-logo.svg.png'; $res = remote_file_exists($url); var_dump($res); // Output: bool(true)  // ... and use a fake URL $url = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/100px_FAKE-PHP-logo.svg.png'; $res = remote_file_exists($url); var_dump($res); // Output: bool(false)   The first thing to notice is that the response message might have the different version of the protocol: HTTP/1.0 404 Not Found, HTTP/1.1 404 Not Found etc.   And the second one - get_headers() won’t work properly in case allow_url_fopen is disabled.   To check if allow_url_fopen is enabled or not, you can use ini_get():   &lt;?php if (ini_get('allow_url_fopen')) {     echo 'allow_url_fopen is enabled'; }   If it’s possible edit your php.ini file, find allow_url_fopen and specify   allow_url_fopen=1   In case you don’t have access to do this, use the following code in your PHP script (from the very beginning):   &lt;?php  ini_set('allow_url_fopen', 1);  ","categories": ["PHP"],
        "tags": ["get_headers","allow_url_fopen"],
        "url": "/2017/11/09/remote-file-exists-using-get-headers/",
        "teaser": null
      },{
        "title": "Working with AWS credentials on macOS",
        "excerpt":"Check credentials   $ aws configure list   Add credentials   $ nano ~/.aws/credentials   [default] aws_access_key_id=&lt;…&gt; aws_secret_access_key=&lt;…&gt;  ","categories": ["DevOps"],
        "tags": ["AWS","macOS"],
        "url": "/2018/03/01/aws-credentials/",
        "teaser": null
      },{
        "title": "Next AUTO_INCREMENT value",
        "excerpt":"To get the next AUTO_INCREMENT value from a table run the following query:   SELECT AUTO_INCREMENT FROM information_schema.TABLES WHERE TABLE_SCHEMA = \"databaseName\" AND TABLE_NAME = \"tableName\"  ","categories": ["MySQL"],
        "tags": ["AUTO_INCREMENT"],
        "url": "/2018/03/01/next-auto-increment/",
        "teaser": null
      },{
        "title": "PHP 7 Compatibility Checker (php7cc)",
        "excerpt":"$ apk add php7-phar   $ composer global require sstalle/php7cc $ php composer.phar global require sstalle/php7cc $ export PATH=\"$PATH:$HOME/.composer/vendor/bin\"   $ php7cc /path/to/file.php   Source URL: https://github.com/sstalle/php7cc  ","categories": ["PHP"],
        "tags": ["PHP 7","Alpine Linux","php7cc"],
        "url": "/2018/03/01/php-7-compatibility-checker/",
        "teaser": null
      },{
        "title": "How to reload Nginx on Alpine Linux",
        "excerpt":"$ nginx -s reload -c /conf/nginx/nginx.conf  ","categories": ["DevOps"],
        "tags": ["Nginx","Alpine Linux"],
        "url": "/2018/03/01/reload-nginx-on-alpine/",
        "teaser": null
      },{
        "title": "Install AWS CLI on macOS",
        "excerpt":"Easiest way to install AWS CLI   $ brew install awscli   See more http://www.chrisjmendez.com/2017/02/18/aws-installing-aws-client-using-homebrew/   A bit longer way…   $ brew install python3 $ python3 --version   $ sudo mkdir /usr/local/Frameworks $ sudo chown $(whoami):admin /usr/local/Frameworks   $ brew link python   Error: pip3: command not found  $ brew postinstall python3 $ pip3 --version   URL: https://docs.aws.amazon.com/cli/latest/userguide/cli-install-macos.html  ","categories": ["DevOps"],
        "tags": ["AWS CLI","Mac","AWS"],
        "url": "/2018/03/17/install-aws-cli-on-macos/",
        "teaser": null
      },{
        "title": "Launch Sublime Text 3 from the terminal",
        "excerpt":"$ echo $PATH   Output: /usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin   Create a symbolic link   $ ln -s \"/Applications/Sublime Text.app/Contents/SharedSupport/bin/subl\" /usr/local/bin/subl   To open the entire current directory   $ subl .  ","categories": ["Mac"],
        "tags": ["command line","terminal","Sublime Text"],
        "url": "/2018/08/30/launch-sublime-text-3-terminal/",
        "teaser": null
      },{
        "title": "Error: tool 'xcodebuild' requires Xcode... on macOS",
        "excerpt":"If you get the following error with npm install    xcode-select: error: tool 'xcodebuild' requires Xcode, but active developer directory'/Library/Developer/CommandLineTools' is a command line tools instance   then to fix it try      (optional) Install Xcode - go to the AppStore and download the Xcode.   Point the xcode-select developer directory to the appropriate directory from within Xcode.app. To do this, run   sudo xcode-select -s /Applications/Xcode.app/Contents/Developer  ","categories": ["Mac"],
        "tags": ["command line","terminal","Xcode"],
        "url": "/2018/09/28/xcodebuild-requires-xcode/",
        "teaser": null
      },{
        "title": "Set up PHP 7.2 on macOS Mojave (with homebrew)",
        "excerpt":"To check the version of PHP in the terminal, type the following command:   php -v   or can see what versions of PHP are installed with    brew list | grep php   Maybe it’s worth cleaning up some of the old packages from brew. It’s up to you.   Make sure brew is up to date:   brew update brew upgrade   Let’s finally install 7.2 version of PHP   brew install php@7.2   If you need to have this version of PHP first in your PATH run the following command:   echo 'export PATH=\"/usr/local/opt/php@7.2/bin:$PATH\"' &gt;&gt; ~/.bash_profile echo 'export PATH=\"/usr/local/opt/php@7.2/sbin:$PATH\"' &gt;&gt; ~/.bash_profile source ~/.bash_profile   And the result?   php --version   Where is a php.ini file?   Your .ini file is located in /usr/local/etc/php/7.2/php.ini. To check just type   php --ini   How to install extensions?   PHP extensions have been removed and now should be installed from PECL:   pecl install xdebug  ","categories": ["Mac"],
        "tags": ["command line","terminal","PHP","homebrew"],
        "url": "/2018/11/08/set-up-php-7.2-on-macos-mojave-with-homebrew/",
        "teaser": null
      },{
        "title": "How to fix imprecise calculations in JavaScript",
        "excerpt":"What is it about? Try to execute some of the following examples in the browser console (or somehow using JavaScript) and you will see that sometimes there are small computational errors.   Browser console output:   &gt; 0.1 + 0.2 0.30000000000000004   &gt; 0.1 * 0.2 0.020000000000000004   &gt; 16.08 * 100 1607.9999999999998   &gt; 0.1.toFixed(20) \"0.10000000000000000555\"   &gt; 9999999999999999 10000000000000000   Don’t get me wrong, this is certainly not a problem of the language itself. The same thing happens in Java, C, PHP, Ruby, etc. If you are interested in the details, please read more in this article.   Below you will find the simplest solutions that allow to “fix” this inaccuracy.   Solution #1   Let’s use the toPrecision method to format a number to a specified precision.   // Pedro Ladaria's solution function strip(number) {     return (parseFloat(number.toPrecision(12))); }   Browser console:   &gt; strip(0.1 + 0.2); 0.3   &gt; strip(0.1 * 0.2); 0.02   &gt; strip(16.08 * 100); 1608   Solution #2   Let’s format a number using fixed-point notation into a string with 2 (up to 20) digits after the decimal point using the toFixed method.   Browser console:   &gt; (0.1 + 0.2).toFixed(2) \"0.30\"   &gt; (0.1 * 0.2).toFixed(2) \"0.02\"   &gt; (16.08 * 100).toFixed(2) \"1608.00\"   It’s not hard to get a number as a return value. For instance,   &gt; parseFloat((0.1 + 0.2).toFixed(2)) 0.3  ","categories": ["JavaScript"],
        "tags": ["calculation","parseFloat","toFixed"],
        "url": "/2019/01/20/imprecise-calculations-in-javascript/",
        "teaser": null
      },{
        "title": "At least one checkbox must be selected (checked)",
        "excerpt":"There is a form with multiple checkboxes and we’re going to make sure that at least one is checked using pure JavaScript. To set a custom validation error message, we will use setCustomValidity() method.   Here’s how the error message will look in the Google Chrome browser when trying to send a form without selecting a checkbox:      HTML code:   &lt;!DOCTYPE HTML&gt; &lt;html&gt;   &lt;head&gt;     &lt;title&gt;At least one checkbox must be selected&lt;/title&gt;     &lt;meta charset=\"utf-8\"&gt;   &lt;/head&gt;   &lt;body&gt;     &lt;form id=\"sectionForm\" method=\"post\"&gt;         &lt;h3&gt;Please select at least one item&lt;/h3&gt;          &lt;p&gt;&lt;input type=\"checkbox\" name=\"section\" value=\"sports\"&gt;Sports&lt;/p&gt;         &lt;p&gt;&lt;input type=\"checkbox\" name=\"section\" value=\"business\"&gt;Business&lt;/p&gt;         &lt;p&gt;&lt;input type=\"checkbox\" name=\"section\" value=\"health\"&gt;Health&lt;/p&gt;         &lt;p&gt;&lt;input type=\"checkbox\" name=\"section\" value=\"society\"&gt;Society&lt;/p&gt;                  &lt;p&gt;&lt;input type=\"submit\" value=\"Submit\"&gt;&lt;/p&gt;     &lt;/form&gt;      &lt;script src=\"script.js\"&gt;&lt;/script&gt;   &lt;/body&gt; &lt;/html&gt;   A content of the script.js file:   (function() {     const form = document.querySelector('#sectionForm');     const checkboxes = form.querySelectorAll('input[type=checkbox]');     const checkboxLength = checkboxes.length;     const firstCheckbox = checkboxLength &gt; 0 ? checkboxes[0] : null;      function init() {         if (firstCheckbox) {             for (let i = 0; i &lt; checkboxLength; i++) {                 checkboxes[i].addEventListener('change', checkValidity);             }              checkValidity();         }     }      function isChecked() {         for (let i = 0; i &lt; checkboxLength; i++) {             if (checkboxes[i].checked) return true;         }          return false;     }      function checkValidity() {         const errorMessage = !isChecked() ? 'At least one checkbox must be selected.' : '';         firstCheckbox.setCustomValidity(errorMessage);     }      init(); })();  ","categories": ["JavaScript"],
        "tags": ["checkbox","setCustomValidity"],
        "url": "/2019/07/13/javascript-at-least-one-checkbox-must-be-selected/",
        "teaser": null
      },{
        "title": "Using Apache Bench for simple load testing",
        "excerpt":"The following command runs 100 requests in total with 10 concurrent requests to example.com.   ab -n 100 -c 10 http://example.com/   Note! ApacheBench (ab) is installed on macOS by default.   Output will contain a lot of useful information. However firstly it’s worth paying attention to the following values:      Requests per second   Failed requests   Time per request   The -H flag allows you to append extra headers to the request:   ab -n 100 -c 10 -H \"Accept-Encoding: gzip,deflate\" http://example.com/   The argument is typically in the form of a valid header line, containing a colon-separated field-value pair (ex., \"Accept-Encoding: gzip,deflate\").   The -r flag means don’t exit if it gets an error:   ab -n 100 -c 10 -r http://example.com/   To make POST requests with a specific file used as the POST data, run the following command:   ab -n 100 -c 10 -p data.json -T application/json http://example.com/   The -T flag allows to specify the content type header like application/json. Default is text/plain.   Use watch to keep on firing ab requests at an endpoint. Notice that watch isn’t available by default on macOS, but can be easily installed with Homebrew:   brew install watch   and run   watch -n 1 ab -n 100 -c 10 http://example.com/  ","categories": ["Testing"],
        "tags": ["Apache Bench","Apache Benchmark"],
        "url": "/2019/12/02/apache-bench-for-load-testing/",
        "teaser": null
      },{
        "title": "How to Write to NTFS Drives in macOS Mojave",
        "excerpt":"In case you use NTFS formatted USB drives on your Mac, you can only open files stored on those drives, but you can’t change those files.   In other words,      macOS computers mount NTFS formatted USB drives as “Read Only”;   “Read Only” mounted drives cannot be written to with macOS computers.   There are several ways to work around this problem.   1. Change Drive Format to exFAT   If you’re going to be transferring files between Mac’s and PC’s use exFAT. The macOS Mojave supports exFAT file format and since Windows does too, converting an NTFS drive to exFAT may solve the problem of accessing the files it contains on both platforms.   If it’s your case, read this      https://support-en.wd.com/app/answers/detail/a_id/20821   However you will lose all the data, and in case you forget to backup first, it will be gone forever.   2. Apple’s Experimental NTFS-Write Support   The macOS includes experimental support for writing to NTFS drives. However, it’s off by default and requires some messing around in the terminal to enable it.   If you want to take the risk and try them out, read the following tutorial      http://osxdaily.com/2013/10/02/enable-ntfs-write-support-mac-os-x/   This solution could potentially cause problems with your NTFS file system, so use it with caution.   3. Third Party NTFS Drivers   Last but not least, there are third party paid drivers that allow Mac users to read, write and access NTFS formatted USB drives without reformatting the drive with exFAT or using of experimental features.      Microsoft NTFS for Mac by Paragon Software   Microsoft NTFS for Mac by Tuxera  ","categories": ["Mac"],
        "tags": ["NTFS","macOS","exFAT"],
        "url": "/2020/01/09/how-to-write-to-ntfs-drives-in-macos-mojave/",
        "teaser": null
      },{
        "title": "Too many open files error on macOS",
        "excerpt":"We’re going to increase an ulimit setting on macOS, but first let’s obtain the current limit of file descriptors via ulimit -n.   In case this value has not been changed before, a maximum number of open files most likely will be 256.   To increase this setting execute   ulimit -n 12288   where 12288 – a desired value.   However keep in mind that ulimit changes the limit only for current session. So put this command to your ~/.bash_profile file:   echo 'ulimit -n 12288' &gt;&gt; ~/.bash_profile  ","categories": ["Mac"],
        "tags": ["macOS","ulimit"],
        "url": "/2021/06/22/too-many-open-files-error-on-macos/",
        "teaser": null
      }]
