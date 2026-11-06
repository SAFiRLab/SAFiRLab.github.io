---
title: SAFiR Lab
subtitle: Sherbrooke Autonomous Field Robotics Lab
hero_image: /assets/group/SAFiR_group_wide_2026.jpg
hero_link: /research/
hero_link_text: Our research
hero_link2: /contact/
hero_link_text2: Contact us
---

<p class="home-intro">The SAFiR Lab is an autonomous field robotics research group that develops innovative strategies in perception, mapping, decision-making, planning and control to improve the autonomy of aerial, terrestrial and aquatic robots in real and complex environments.</p>

<div class="video-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/S3yc67EqrLE" title="SAFiR Lab" loading="lazy" allowfullscreen></iframe>
</div>

<div class="columns is-multiline home-cards">
  <div class="column is-4-desktop is-12-tablet">
    <div class="home-card">
      <h3 class="title is-4">Our Projects</h3>
      <p>Explore our research.</p>
      <a href="{{ '/research/' | relative_url }}" class="button is-safir is-small">Discover the projects</a>
    </div>
  </div>
  <div class="column is-4-desktop is-12-tablet">
    <div class="home-card">
      <h3 class="title is-4">Our Publications</h3>
      <p>Discover our latest publications.</p>
      <a href="{{ '/publications/' | relative_url }}" class="button is-safir is-small">Read the publications</a>
    </div>
  </div>
  <div class="column is-4-desktop is-12-tablet">
    <div class="home-card">
      <h3 class="title is-4">Our Team</h3>
      <p>Meet SAFiR Lab researchers.</p>
      <a href="{{ '/team/' | relative_url }}" class="button is-safir is-small">See the team</a>
    </div>
  </div>
</div>

<div class="map-embed">
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.10030396678485!2d-71.94284737015059!3d45.375114531087185!2m3!1f342.07171314741106!2f57.82002048525859!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0xa25e4ba420ec51d5%3A0x755f6ea2ca53eae4!2sSAFiR%20-%20Sherbrooke%20Autonomous%20Field%20Robotics%20Lab!5e1!3m2!1sen!2sca!4v1757531552873!5m2!1sen!2sca" title="SAFiR Lab location" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>

<h2 class="title is-4 section-heading">Our Partners</h2>

<div class="columns is-multiline is-vcentered is-mobile partners">
  {% for partner in site.data.partners %}
  <div class="column is-3-desktop is-4-tablet is-6-mobile has-text-centered">
    <a href="{{ partner.link }}" target="_blank" rel="noopener" aria-label="{{ partner.name }}"><img src="{{ partner.logo | relative_url }}" alt="{{ partner.name }}"></a>
  </div>
  {% endfor %}
</div>

