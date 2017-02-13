<div class="psr oh invert z1" data-drawer>
  <div class="gt bg-white"></div>
  <div class="psa fw fh t0 l0 gt">
    <div class="fw fh osy h1" data-drawer-scroll>
      <div class="c12">
      <? foreach ($site->children()->visible() as $section) : ?>
        <div data-drawer-section="<?= $section->slug() ?>">
          <? if ($section->slug() === 'index') : ?>
            <? snippet('index-drawer') ?>
          <? elseif ($section->slug() === 'volumes') : ?>
            <? snippet('volumes-drawer') ?>
          <? else : ?>
            <div class="g">
              <div class="owl c12 text" md="c10">
                <?= $section->text()->kirbytext() ?>
                <div class="pt4 h2 c12 owl" md="c8">
                  <?= $section->metatext()->kirbytext() ?>
                </div>
              </div>
            </div>
          <? endif ?>
        </div>
      <? endforeach ?>

      <? if ($page->parent()->slug() === 'volumes') : ?>
      <div class="active-invert" data-drawer-section="contents">
        <div class="g text">
        <? foreach ($page->images()->filter(function($image) {
            return !str::contains($image->filename(), 'thumb_');
          }) as $image) : ?>
          <? if (!$image->text()->empty()) : ?>
          <a data-subnav="<?= $page->uri() ?>" href="#<?= $image->name() ?>"><?= $image->text()->kirbytextRaw() ?></a>
          <? endif ?>
        <? endforeach ?>
        </div>
      </div>
      <? endif ?>

      </div>
    </div>
  </div>
</div>
