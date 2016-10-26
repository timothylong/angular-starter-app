# Angular Starter

A basic introduction to Angular, including routes, controllers, constants, HTML5 History API, and page transitions.

## Goals

- Improve overall file and application organization
- Clearer documentation
- Probably even more things, but TBD

## Server Support

To get full support on pushState URLs, a server side rewrite is necessary. I use an Apache server, so here's the wizardry for that:

**Local**

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

**Remote**

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