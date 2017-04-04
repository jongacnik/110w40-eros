<div class="p1 ag-volumes-nav">
<? foreach (page('volumes')->children()->visible() as $volume) : ?>
<? $image = $volume->images()->filterBy('filename', '*=', 'spine')->first(); ?>
  <div class="p1 c12">
    <a class="op50-hover db spine c12" href="<?= $volume->url() ?>">
      <div class="psa t0 l0 fw fh bgc" style="background-image:url(<?= $image->url() ?>)"></div>
    </a>
  </div>
<? endforeach ?>
</div>
