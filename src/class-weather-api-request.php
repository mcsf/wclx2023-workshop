<?php

if ( ! class_exists( 'Weather_API_Request' ) ) {
	class Weather_API_Request {
		public $data = array(
			'name' => '-',
			'temp' => '-',
			'desc' => '-',
			'icon' => '-',
		);

		private $fixtures = array(
			'LIS' => array(
				'name' => 'Lisboa',
				'temp' => '21°',
				'desc' => 'Soalheiro',
				'icon' => '☀️',
			),
			'OPO' => array(
				'name' => 'Porto',
				'temp' => '18°',
				'desc' => 'Parcialmente nublado',
				'icon' => '🌤️',
			),
		);

		public function __construct( $city_slug ) {
			if ( array_key_exists( $city_slug, $this->fixtures ) ) {
				$this->data = $this->fixtures[ $city_slug ];
			} else {
				$this->data['name'] = $city_slug;
			}
		}
	}
}
