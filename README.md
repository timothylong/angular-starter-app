# Angular Starter

A basic introduction to Angular, including routes, controllers, constants, HTML5 History API, page transitions and a dynamic loading bar. (Yes, the last two were self-indulgent, but hey, I'm a designer.)

## Goals

- Improve overall file and application organization
- Set up a build system (probably Gulp, but maybe Webpack, because apparently that's what people use in 2016)
- Write clearer documentation so that at least I remember what things are doing when I look at this again in six months
- Probably even more things, but TBD

## Server Support

In order to get full support on fancy pushState URLs, we need to a server side rewrite is necessary. I use an Apache server, so here is the wizardry for that:

** Local **

~~~~
<VirtualHost *:80 />
    DocumentRoot "Path to project folder"
    ServerName local.domain.com
    <Directory "Path to project folder">
        RewriteEngine on
        RewriteCond %{REQUEST_FILENAME} -f [OR]
        RewriteCond %{REQUEST_FILENAME} -d
        RewriteRule ^ - [L]
        RewriteRule ^ index.html [L]
    </Directory>
</VirtualHost>
~~~~

** Remote **

~~~~
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteBase /
    RewriteRule ^index\.html$ - [L]
    RewriteCond %{REQUEST_FILENAME} !-f
    RewriteCond %{REQUEST_FILENAME} !-d
    RewriteRule . /index.html [L]
 </IfModule>
~~~~