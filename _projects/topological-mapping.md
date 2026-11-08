---
title: Topological Mapping for Traversability-aware Long-range Navigation in Off-road Terrain
subtitle: ICRA 2025 - Atlanta, GA, USA
hero_links:
  - text: PDF
    url: https://arxiv.org/abs/2410.01925
  - text: Code
    url: https://github.com/jefft255/trav_aware_topological_mapping
authors:
  - name: Jean-François Tremblay
    url: https://jefft255.github.io/about/
  - name: Julie Alhosh
  - name: Louis Petit
    url: /team/louis-petit/
  - name: Faraz Lotfi
  - name: Lara Landauro
  - name: David Meger
bibtex: |
  @inproceedings{tremblay2025topological,
    author = {Tremblay, Jean-Fran{\c{c}}ois and Alhosh, Julie and Petit, Louis and Lotfi, Faraz and Landauro, Lara and Meger, David},
    title = {Topological mapping for traversability-aware long-range navigation in off-road terrain},
    booktitle = {2025 IEEE International Conference on Robotics and Automation (ICRA)},
    year = {2025},
    url = {https://arxiv.org/abs/2410.01925}
  }
---

<div class="photo-ratio-row is-tight">
  <figure style="--ar: 1.4286">
    <a href="{{ '/assets/projects/topological-mapping/01.png' | relative_url }}" data-lightbox="topological-mapping" title="Enlarge">
      <img src="{{ '/assets/projects/topological-mapping/01.png' | relative_url }}" alt="Topological mapping figure 1">
    </a>
  </figure>
  <figure style="--ar: 0.7300">
    <a href="{{ '/assets/projects/topological-mapping/02.png' | relative_url }}" data-lightbox="topological-mapping" title="Enlarge">
      <img src="{{ '/assets/projects/topological-mapping/02.png' | relative_url }}" alt="Topological mapping figure 2">
    </a>
  </figure>
  <figure style="--ar: 0.7300">
    <a href="{{ '/assets/projects/topological-mapping/03.png' | relative_url }}" data-lightbox="topological-mapping" title="Enlarge">
      <img src="{{ '/assets/projects/topological-mapping/03.png' | relative_url }}" alt="Topological mapping figure 3">
    </a>
  </figure>
</div>

<div class="photo-ratio-row is-tight">
  <figure style="--ar: 1.4286">
    <a href="{{ '/assets/projects/topological-mapping/04.png' | relative_url }}" data-lightbox="topological-mapping" title="Enlarge">
      <img src="{{ '/assets/projects/topological-mapping/04.png' | relative_url }}" alt="Topological mapping figure 4">
    </a>
  </figure>
  <figure style="--ar: 0.7300">
    <a href="{{ '/assets/projects/topological-mapping/05.png' | relative_url }}" data-lightbox="topological-mapping" title="Enlarge">
      <img src="{{ '/assets/projects/topological-mapping/05.png' | relative_url }}" alt="Topological mapping figure 5">
    </a>
  </figure>
  <figure style="--ar: 0.7300">
    <a href="{{ '/assets/projects/topological-mapping/06.png' | relative_url }}" data-lightbox="topological-mapping" title="Enlarge">
      <img src="{{ '/assets/projects/topological-mapping/06.png' | relative_url }}" alt="Topological mapping figure 6">
    </a>
  </figure>
</div>

## Abstract

Autonomous robots navigating in off-road terrain like forests open new opportunities for automation. While off-road navigation has been studied, existing work often relies on clearly delineated pathways. We present a method allowing for long-range planning, exploration and low-level control in unknown off-trail forest terrain, using vision and GPS only. We represent outdoor terrain with a topological map, which is a set of panoramic snapshots connected with edges containing traversability information. A novel traversability analysis method is demonstrated, predicting the existence of a safe path towards a target in an image. Navigating between nodes is done using goal-conditioned behavior cloning, leveraging the power of a pretrained vision transformer. An exploration planner is presented, efficiently covering an unknown off-road area with unknown traversability using a frontiers-based approach. The approach is successfully deployed to autonomously explore two 400 meters squared forest sites unseen during training, in difficult conditions for navigation.

<p class="has-text-centered project-credits">More info on <a href="https://jefft255.github.io/topological_mapping">this page</a>.</p>
