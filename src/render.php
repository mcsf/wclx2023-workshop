<?php

require_once 'class-weather-api-request.php';

$weather = new Weather_API_Request( $attributes['city'] );
$classes = 'wclx2023-weather';
$wrapper_attributes = get_block_wrapper_attributes( array( 'class' => $classes) );

?>

<div <?= $wrapper_attributes ?>>
	<div><?= $weather->data['name'] ?></div>
	<big><?= $weather->data['temp'] ?> <?= $weather->data['icon'] ?></big>
	<div><?= $weather->data['desc'] ?></div>
</div>
