---
title: Research
subtitle: Enabling intelligent robots to better understand their environment
hero_image: /assets/robots/warthog_wide.jpeg
hero_link: /publications/
hero_link_text: Publications
hero_link2: /code/
hero_link_text2: Code
---

<p class="home-intro">Our mission is to enable the widespread use of intelligent robots to serve society, by enabling them to better understand their environment and react optimally to a variety of situations.</p>

<div class="columns is-multiline research-areas">
  {% for area in site.data.research_areas %}
  <div class="column is-4-desktop is-12-tablet">
    <div class="research-area">
      <h3 class="title is-5">{{ area.title }}</h3>
      <p>{{ area.description }}</p>
    </div>
  </div>
  {% endfor %}
</div>

<h2 class="title is-4 section-heading">Completed projects</h2>

<div class="columns is-multiline is-mobile project-grid">
  {% for project in site.data.projects.completed %}
  <div class="column is-6-mobile is-4-tablet is-3-desktop">
    <a class="card project-card project-card-link" href="{{ project.link }}" target="_blank" rel="noopener">
      <div class="card-image">
        <figure class="image is-3by2">
          <img src="{{ project.media | relative_url }}" alt="{{ project.title }}">
        </figure>
      </div>
      <div class="card-content">
        <p>{{ project.title }}</p>
      </div>
    </a>
  </div>
  {% endfor %}
</div>

<h2 class="title is-4 section-heading">Ongoing projects</h2>

<div class="columns is-multiline is-mobile project-grid">
  {% for project in site.data.projects.ongoing %}
  <div class="column is-6-mobile is-4-tablet is-3-desktop">
    <div class="card project-card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
        </figure>
      </div>
      <div class="card-content">
        <p>{{ project.title }}</p>
      </div>
    </div>
  </div>
  {% endfor %}
  {% for project in site.data.projects.future %}
  <div class="column is-6-mobile is-4-tablet is-3-desktop">
    <div class="card project-card">
      <div class="card-image">
        <figure class="image is-3by2">
          <img src="{{ project.image | relative_url }}" alt="{{ project.title }}">
        </figure>
      </div>
      <div class="card-content">
        <p>{{ project.title }}</p>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
