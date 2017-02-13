<div class="xx psr" data-drawer-close>
  <div class="psa fh fw">
    <div class="fw fh ohy osx nowrap g no-margin-right-last" data-aspect-container data-scroll-container>
      <?
      $images = $page->images()->sortBy('name', 'asc')->filter(function($image) {
        return !str::contains($image->filename(), 'thumb_') && !str::contains($image->filename(), 'spine');
      });
      ?>
      <? $section = '' ?>
      <? foreach ($images as $image) : ?>
      <? $section = $image->text()->isNotEmpty() ? $image->name() : $section ?>
        <div id="<?= $section ?>" class="dib mr2 fh psr bgrn bgpc image-container" md="mr4" data-aspect="<?= $image->height() / $image->width() ?>" data-watch>
          <div class="fw fh bgc lazy-wrap">
            <img data-blazy="bg" data-src="<?= $image->url() ?>">
          </div>
        </div>
      <? endforeach ?>
    </div>
  </div>
</div>
