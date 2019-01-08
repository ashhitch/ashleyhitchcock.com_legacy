<?php add_theme_support( 'post-thumbnails' ); 

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