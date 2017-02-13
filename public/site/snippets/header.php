<!DOCTYPE html>
<html lang="en" class="fluid">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0">

  <meta name="description" content="<?= $site->text() ?>">
  <meta name="keywords" content="<?= $site->keywords() ?>">

  <!-- Twitter Card data -->
  <meta name="twitter:card" content="summary">
  <meta name="twitter:site" content="@uistudentlife">
  <meta name="twitter:title" content="<?= $site->title() ?>">
  <meta name="twitter:description" content="<?= $site->text() ?>">
  <meta name="twitter:image" content="<?= $site->image($site->socialImage())->url() ?>">

  <!-- Open Graph data -->
  <meta property="og:title" content="<?= $site->title() ?>" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="<?= $site->url() ?>" />
  <meta property="og:image" content="<?= $site->image($site->socialImage())->url() ?>" />
  <meta property="og:description" content="<?= $site->text() ?>" />
  <meta property="og:site_name" content="<?= $site->title() ?>" />

  <title><?= $site->title()->html() ?></title>

  <?= css('assets/bundle.css') ?>

</head>
<body class="h2">

  <main class="main dx xdc vh psr">
