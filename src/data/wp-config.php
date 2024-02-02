<?php


/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u747489242_db' );

/** MySQL database username */
define( 'DB_USER', 'u747489242_user' );

/** MySQL database password */
define( 'DB_PASSWORD', 'peaKbaturaSar7+' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ipyCw:k|!<ok{#%>eviJ+{&kw(QrA6),V[+]Zm05]zzZ$wS$0p+;dhQ=-2~*LXbJ');
define('SECURE_AUTH_KEY',  'GRlr&RWFK=9lYScGpX}*^JOs6c|b&5=8J|kx|(MwIGHQM<-s<IFFy8D`;NOoz;X*');
define('LOGGED_IN_KEY',    'Az,&J!!a4k<$ C^n(t|`YYa-6y5C}Vk-aStOktP0 MTB]qU60p8fo0vR1F&rJubj');
define('NONCE_KEY',        '}A6KGH5-8RtvSY}SSRsf:jel.e0b6edt)JsRmw*+ZX-~q&,R5OcVb`USZA^v)pdn');
define('AUTH_SALT',        '!LmT6arco6}X08|Zid.vvvb45:,-JY<+?u^%m$P2hc~TI|e|+!yiBmsJl~I-&:2?');
define('SECURE_AUTH_SALT', 'PwOpcxJFqHwl+)O&}};] (b(2p/lgAz530!mSWx[BSpZ>+fHb{?ONv`MaiaUd~x{');
define('LOGGED_IN_SALT',   'F:q@3VOlEZPEKN2VlZ~)EgM|M(tg<&r4IrN$?4x iA>Vld+*$9`c+).IEt9&GU=d');
define('NONCE_SALT',       ',pQz9/0-kEb|s%m`GqdfBRK<HZZt{[*A)ptpI+]F9t`yrCTe`[?=FExGRFI1eWst');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

define('DISALLOW_FILE_MODS',true);

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
