<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta id="vp" name="viewport" content="width=device-width">
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>egor shop</title>
    <link rel="manifest" href={{ asset('./mix-manifest.json') }}>
    <script>
		window.onload = function() {
			if (screen.width < 450) {
				var mvp = document.getElementById('vp');
				mvp.setAttribute('content','width=450');
			}
		}
    </script>
</head>
<body>
<noscript>Please, enable javascript</noscript>
<div id="root"></div>
<link href="{{ asset('css/app.css') }}" rel="stylesheet">
<script src="{{ asset('js/app.js') }}"></script>
</body>
</html>
