<?php
/**
 * Plugin Name:     WPGraphQL ACF
 * Plugin URI:      https://github.com/tonimain/wp-graphql-acf
 * Description:     Adds Advanced Custom Fields to the WPGraphQL Schema
 * Author:          WPGraphQL, Toni Main, Jason Bahl
 * Author URI:      https://www.wpgraphql.com
 * Text Domain:     wp-graphql-acf
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         WPGraphQL_ACF
 */

namespace WPGraphQL\Extensions;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( '\WPGraphQL\Extensions\ACF' ) ) :

	final class ACF {

		/**
		 * Stores the instance of the WPGraphQL\Extensions\ACF class
		 *
		 * @var ACF The one true WPGraphQL\Extensions\ACF
		 * @access private
		 */
		private static $instance;

		public static function instance() {

			if ( ! isset( self::$instance ) && ! ( self::$instance instanceof ACF ) ) {
				self::$instance = new ACF;
				self::$instance->setup_constants();
				self::$instance->includes();
				self::$instance->actions();
				self::$instance->filters();
			}

			/**
			 * Fire off init action
			 *
			 * @param ACF $instance The instance of the WPGraphQL\Extensions\ACF class
			 */
			do_action( 'graphql_acf_init', self::$instance );

			/**
			 * Return the WPGraphQL Instance
			 */
			return self::$instance;
		}

		/**
		 * Throw error on object clone.
		 * The whole idea of the singleton design pattern is that there is a single object
		 * therefore, we don't want the object to be cloned.
		 *
		 * @access public
		 * @return void
		 */
		public function __clone() {

			// Cloning instances of the class is forbidden.
			_doing_it_wrong( __FUNCTION__, esc_html__( 'The \WPGraphQL\Extensions\ACF class should not be cloned.', 'wp-graphql-acf' ), '0.0.1' );

		}

		/**
		 * Disable unserializing of the class.
		 *
		 * @access protected
		 * @return void
		 */
		public function __wakeup() {

			// De-serializing instances of the class is forbidden.
			_doing_it_wrong( __FUNCTION__, esc_html__( 'De-serializing instances of the \WPGraphQL\Extensions\ACF class is not allowed', 'wp-graphql-acf' ), '0.0.1' );

		}

		/**
		 * Setup plugin constants.
		 *
		 * @access private
		 * @return void
		 */
		private function setup_constants() {

			// Plugin version.
			if ( ! defined( 'WPGRAPHQL_ACF_VERSION' ) ) {
				define( 'WPGRAPHQL_ACF_VERSION', '0.1.0' );
			}

			// Plugin Folder Path.
			if ( ! defined( 'WPGRAPHQL_ACF_PLUGIN_DIR' ) ) {
				define( 'WPGRAPHQL_ACF_PLUGIN_DIR', plugin_dir_path( __FILE__ ) );
			}

			// Plugin Folder URL.
			if ( ! defined( 'WPGRAPHQL_ACF_PLUGIN_URL' ) ) {
				define( 'WPGRAPHQL_ACF_PLUGIN_URL', plugin_dir_url( __FILE__ ) );
			}

			// Plugin Root File.
			if ( ! defined( 'WPGRAPHQL_ACF_PLUGIN_FILE' ) ) {
				define( 'WPGRAPHQL_ACF_PLUGIN_FILE', __FILE__ );
			}

		}

		/**
		 * Include required files.
		 * Uses composer's autoload
		 *
		 * @access private
		 * @return void
		 */
		private function includes() {

			// Autoload Required Classes
			require_once( WPGRAPHQL_ACF_PLUGIN_DIR . 'vendor/autoload.php' );

		}

		/**
		 * Sets up actions to run at certain spots throughout WordPress and the WPGraphQL execution cycle
		 */
		private function actions() {

			/**
			 * Add acf fields to the types registered to GraphQL
			 */
			add_action( 'do_graphql_request', [ '\WPGraphQL\Extensions\ACF\Actions', 'acf_add_fields_to_types' ] );

		}

		/**
		 * Setup filters
		 */
		private function filters() {

			add_filter( 'graphql_root_queries', [ '\WPGraphQL\Extensions\ACF\Filters', 'acf_root_query_field_groups' ], 10, 1 );
			add_filter( 'acf/get_field_types', [ '\WPGraphQL\Extensions\ACF\Filters', 'acf_field_types' ], 100 );
			add_filter( 'acf/get_fields', [ '\WPGraphQL\Extensions\ACF\Filters', 'acf_get_fields' ], 100 );

		}

	}

endif;

function init() {
    if(!class_exists('acf')) {
        add_action( 'admin_notices', function() {
            ?>
            <div class="error notice">
                <p><?php _e( 'Advanced custom fields must be active for wp-graphql-acf to work', 'wp-graphiql-acf' ); ?></p>
            </div>
            <?php
        });
        return false;
    }

	return ACF::instance();
}

add_action( 'graphql_init', '\WPGraphQL\Extensions\init' );
