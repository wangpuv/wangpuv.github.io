---
layout: page
---
<div class="index-artical">
    <ul class="index-left">
    {% for post in site.categories.blog %}
        {% capture thecycle %}{% cycle 'oddGroup' : 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'odd' %}
        <li>
            <h2>
                <a href="{{ post.url }}">{{ post.title }}</a>
            </h2>
            <span class="title-desc">{{ post.description }}</span>
        </li>
        {% endif %}
    {% endfor %}
    </ul>

    <ul class="index-mid"> </ul>

    <ul class="index-right">
    {% for post in site.categories.blog %}
        {% capture thecycle %}{% cycle 'evenGroup' : 'odd', 'even' %}{% endcapture %}
        {% if thecycle == 'even' %}
        <li>
            <h2>
                <a href="{{ post.url }}">{{ post.title }}</a>
            </h2>
            <span class="title-desc">{{ post.description }}</span>
        </li>
        {% endif %}
    {% endfor %}
    </ul>
</div>

<script type="text/javascript">
$(function(){
    var height = $('.index-artical').height();
    $('.index-mid').height(height-90);
});
</script>
