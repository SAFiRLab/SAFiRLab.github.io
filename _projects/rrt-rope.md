---
title: "RRT-Rope: A deterministic shortening approach for fast near-optimal path planning in large-scale uncluttered 3D environments"
subtitle: SMC 2021 - Melbourne, Australia
hero_links:
  - text: PDF
    url: https://arxiv.org/abs/2606.31948
  - text: Demo
    url: https://www.louispetit.be/demo/rrt-rope-demo
  - text: Code
    url: https://github.com/SAFiRLab/rrt-rope
  - text: Video
    url: https://www.youtube.com/watch?v=kB8-4TFNUO0
authors:
  - name: Louis Petit
    url: /team/louis-petit/
  - name: Alexis Lussier Desbiens
bibtex: |
  @inproceedings{petit2021rrtrope,
    author = {Petit, Louis and Desbiens, Alexis Lussier},
    title = {RRT-Rope: A Deterministic Shortening Approach for Fast Near-optimal Path Planning in Large-Scale Uncluttered 3D Environments},
    booktitle = {2021 IEEE International Conference on Systems, Man, and Cybernetics (SMC)},
    year = {2021},
    url = {https://arxiv.org/abs/2606.31948}
  }
---

<div class="columns is-centered is-multiline is-mobile group-photos photo-row-fixed">

  <div class="column is-6-desktop is-8-tablet is-12-mobile group-photo">
    <figure>
      <a href="{{ '/assets/projects/rrt-rope/01.png' | relative_url }}" data-lightbox="rrt-rope" title="Enlarge">
        <img src="{{ '/assets/projects/rrt-rope/01.png' | relative_url }}" alt="RRT-Rope figure 1">
      </a>
    </figure>
  </div>
</div>

<p class="has-text-centered award-lines"><strong><span class="award-highlight">Best Student Paper Award</span> at SMC 2021</strong><br><strong><span class="award-highlight">Best Paper Award Finalist</span> at SMC 2021</strong></p>

## What is RRT-Rope?

RRT-Rope aims at finding a near-optimal solution in a drastically shorter amount of time for UAV path planning in large-scale 3D environments. The proposed approach benefits from RRT-connect fast computation to find a feasible path, and post-processes it quickly to a near-optimal path, taking advantage of intermediate nodes added to each branch of the tree and stretching them like a rope. RRT-Rope gives better results in terms of path cost and computation time than other popular RRT variations and shortening techniques in all our simulation environments, and is up to 70% faster than the next best algorithm in a representative environment.

## Why?

The idea comes from an autonomous drone project designed to map underground mining stopes. Mining cavities are often large-scale and uncluttered. Many path planning algorithms have been introduced so far, but most are costly, in path cost, and in processing time, in such environments. Rapidly-exploring Random Tree (RRT) algorithms are popular because of their probabilistic completeness and rapidity in finding a feasible path in single-query problems. Many of the algorithms (e.g. Informed RRT\*, RRT#) developed to improve RRT need considerable time to converge in large environments. Shortcutting an RRT is an old idea that has been proven to outperform RRT variants. Underground mining stopes are 3-ball homotopic and the optimal path is therefore in the same homotopy class as any feasible path. The idea of the project is to take advantage of this to develop a path planning algorithm that finds a near-optimal solution in a drastically shorter amount of time than the state-of-the-art in large-scale uncluttered 3D environments.

<div class="columns is-centered is-multiline is-mobile project-videos">
  <div class="column is-6-desktop is-6-tablet is-12-mobile">
    <div class="video-embed">
      <iframe src="https://www.youtube-nocookie.com/embed/kB8-4TFNUO0" title="RRT-Rope video 1: paper summary" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
  <div class="column is-6-desktop is-6-tablet is-12-mobile">
    <div class="video-embed">
      <iframe src="https://www.youtube-nocookie.com/embed/EuvZRRsM3Xg" title="RRT-Rope video 2: paper presentation" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  </div>
</div>
