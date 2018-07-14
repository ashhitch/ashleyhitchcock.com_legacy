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