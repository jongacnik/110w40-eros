<div class="xx psr">
  <div class="psa fh fw">
    <div class="fw fh ohy osx nowrap g no-margin-right-last" data-aspect-container data-scroll-container>
      <? foreach (page('volumes')->children()->visible() as $volume) : ?>
      <? $image = $volume->images()->sortBy('name', 'asc')->filter(function($image) {
        return !str::contains($image->filename(), 'thumb_') && !str::contains($image->filename(), 'spine');
      })->first(); ?>
        <a href="<?= $volume->url() ?>" class="dib mr2 fh psr bgrn bgpc image-container" md="mr4" data-aspect="<?= $image->height() / $image->width() ?>" data-hoversync="<?= $volume->url() ?>">
          <div class="fw fh bgc lazy-wrap">
            <img data-blazy="bg" data-src="<?= $image->url() ?>">
          </div>
        </a>
      <? endforeach ?>
    </div>
  </div>
</div>
