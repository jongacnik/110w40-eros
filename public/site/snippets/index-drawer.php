<div class="ag-index cc p2 c12 oh">
<? $volumes = site()->page('volumes')->children() ?>

<? $volNum = 1 ?>
<? foreach($volumes as $volume) : ?>

  <span class="ag-index-number"><?= $volNum ?></span>
  <? $images = $volume->images()->sortBy('name', 'asc')->filterBy('filename', '*=', 'thumb_') ?>

  <? $count = 1 ?>
  <? foreach($images as $image) : ?>
    <a href="<?= $volume->url()?>#<?= $count ?>" data-index-jumpto>
      <img class="dib rotate-hover" data-mbl data-src="<?= $image->url() ?>">
    </a>
    <? $count++ ?>
  <? endforeach ?>

  <? $volNum++ ?>
<? endforeach ?>
</div>
