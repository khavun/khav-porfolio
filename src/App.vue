<script setup>
	import Sidebar from './components/Sidebar.vue';
	import Home from './components/layout/Home.vue';
	import Project from './components/layout/Project.vue';
	import Skill from './components/layout/Skill.vue';
	import About from './components/layout/About.vue';
	import Education from './components/layout/Education.vue';
	import Experience from './components/layout/Experience.vue';
	import Work from './components/layout/Work.vue';
	import Blog from './components/layout/Blog.vue';
	import Contact from './components/layout/Contact.vue';
</script>

<template>
    <div id="colorlib-page">
		<div class="container-wrap">
		<a href="#" class="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i></i></a>
		<Sidebar />
		<div id="colorlib-main">
			<Home/>
			<About />
			<Project />
			<Skill />
			<Education />
			<Experience />
			<Work />
			<!--<Blog />-->
			<Contact />
		</div><!-- end:colorlib-main -->
	</div><!-- end:container-wrap -->
	</div><!-- end:colorlib-page -->
</template>

<style scoped>

</style>
