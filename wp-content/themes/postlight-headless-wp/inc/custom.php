<?php 


add_theme_support( 'post-thumbnails' ); 

function ag_filter_post_json($response, $post, $context) {
  $tags = wp_get_post_tags($post->ID);
  $response->data['tag_names'] = [];

  foreach ($tags as $tag) {
      $response->data['tag_names'][] = $tag->name;
  }

  return $response;
}

add_filter( 'rest_prepare_post', 'ag_filter_post_json', 10, 3 );


// w

//add_action( 'rest_api_init', 'my_register_route' );

function my_register_route() {
    register_rest_route( 'contact/v1', 'send', array(
                    'methods' => 'POST',
                    'callback' => 'send_email',
                    'args' => array(
                      'email' => array_merge( $form_email_arg, array( 'required' => true ) ),
                      'subject' => array_merge( $form_subject_arg, array( 'required' => true ) ),
                      'message' => array_merge( $form_message_arg, array( 'required' => true ) )
                    )
                )
            );
}
function send_email($request) {
      wp_mail($request['email'], $request['subject'], $request['message']);
    return rest_ensure_response( 'Hello World! This is my first REST API' );
}

add_image_size( 'hero', 1200, 400, true );

add_filter( 'register_post_type_args', function( $args, $post_type ) {

	if ( 'work' === $post_type ) {
		$args['show_in_graphql'] = true;
		$args['graphql_single_name'] = 'Work';
		$args['graphql_plural_name'] = 'Works';
	}

	return $args;

}, 10, 2 );



  add_action( 'graphql_register_types', function() {
  
    $post_types = \WPGraphQL::$allowed_post_types;
    
    if ( ! empty( $post_types ) && is_array( $post_types ) ) {
      foreach ( $post_types as $post_type ) {
         $post_type_object = get_post_type_object( $post_type );


         register_graphql_field( $post_type_object->graphql_single_name, 'hero', [
            'type' => 'String',
            'description' => __( 'Hero Image '.$post_type_object->graphql_single_name, 'wp-graphql' ),
            'resolve' => function( $post ) {
              $image = get_field(  'hero_image',$post->ID );
              $size = 'hero';

    
              if($image) {
                $hero = wp_get_attachment_image_url( $image, $size );
        
              }
              
              return ! empty( $hero ) ? $hero : null;
            }
         ]);

         
        register_graphql_field( $post_type_object->graphql_single_name, 'seotitle', [
            'type' => 'String',
            'description' => __( 'The Yoast SEO Title of the '.$post_type_object->graphql_single_name, 'wp-graphql' ),
            'resolve' => function( $post ) {
              $title = get_post_meta( $post->ID, '_yoast_wpseo_title', true );
              return ! empty( $title ) ? $title : null;
            }
         ]);
         register_graphql_field( $post_type_object->graphql_single_name, 'seometadesc', [
            'type' => 'String',
            'description' => __( 'The Yoast SEO Description of the '.$post_type_object->graphql_single_name, 'wp-graphql' ),
            'resolve' => function( $post ) {
              $desc = get_post_meta( $post->ID, '_yoast_wpseo_metadesc', true );
              return ! empty( $desc ) ? $desc : null;
            }
         ]);
  
      } 
    }

    // $post_type_object_preview = get_post_type_object( 'post');
    // register_graphql_object_type( 'preview', [
    //   'description' => __( sprintf( 'The %s type', 'preview' ), 'wp-graphql' ),
    //   'interfaces'  => [ WPObjectType::node_interface() ],
    //   'fields'      => get_post_object_fields( $post_type_object_preview ),
    // ] );
  });


  function custom_excerpt_length( $length ) {
    return 35;
    }
    add_filter( 'excerpt_length', 'custom_excerpt_length', 999 );