import L_HTML5 from '../../assets/img/skills/html-5.svg';
import L_CSS3 from '../../assets/img/skills/css3.svg';
import L_SASS from '../../assets/img/skills/sass-1.svg';
import L_REACT from '../../assets/img/skills/react.svg';
import L_REDUX from '../../assets/img/skills/redux.svg';
import L_REACT_ROUTER from '../../assets/img/skills/react-router.svg';
import L_REACT_BOOTSTRAP from '../../assets/img/skills/react-bootstrap.svg';
import L_GIT from '../../assets/img/skills/git-icon.svg';
import L_DOCKER from '../../assets/img/skills/docker.png';
import L_GITHUB_PAGES from '../../assets/img/skills/github.svg';
import L_JAVASCRIPT from '../../assets/img/skills/javascript.svg';
import L_SPRING from '../../assets/img/skills/springboot.svg';
import L_SEMANTIC_UI from '../../assets/img/skills/semantic.png';
import L_PERFORCE from '../../assets/img/skills/perforce.jpg';
import L_ORACLE from '../../assets/img/skills/oracle.png';
import L_H2 from '../../assets/img/skills/h2.png';
import L_JAVA from '../../assets/img/skills/java.png';
import L_JUNIT from '../../assets/img/skills/junit.png';
import L_MOCKITO from '../../assets/img/skills/mockito.png';
import L_GRAFANA from '../../assets/img/skills/grafana.svg';

import L_PROMETHEUS from '../../assets/img/skills/prometheus.svg';

import L_MICROMETER from '../../assets/img/skills/micrometer.svg';
import L_REST from '../../assets/img/skills/rest.jpg';
import L_GRAPHQL from '../../assets/img/skills/graphql.svg'
import L_ECLIPSE from '../../assets/img/skills/eclipse.png'
import L_VSCODE from '../../assets/img/skills/vscode.jpeg'
import L_SQLDEV from '../../assets/img/skills/sql-dev.svg'
import L_INTELLIJ from '../../assets/img/skills/intellij.svg.png'

export const skills = {
	frontend: [
		{
			link: 'https://en.wikipedia.org/wiki/HTML5',
			imgAltText: 'HTML 5',
			imgSrc: L_HTML5,
			skillName: 'HTML5',
		},
		{
			link: 'https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1',
			imgAltText: 'CSS 3',
			imgSrc: L_CSS3,
			skillName: 'CSS3',
		},
		{
			link: 'https://www.javascript.com/',
			imgAltText: 'JavaScript',
			imgSrc: L_JAVASCRIPT,
			skillName: 'JavaScript',
		},
		{
			link: 'https://sass-lang.com/',
			imgAltText: 'Sass',
			imgSrc: L_SASS,
			skillName: 'Sass',
		},
		{
			link: 'https://reactjs.org/',
			imgAltText: 'React JS',
			imgSrc: L_REACT,
			skillName: 'React JS',
		},
		{
			link: 'https://redux.js.org/',
			imgAltText: 'Redux',
			imgSrc: L_REDUX,
			skillName: 'Redux',
		},
		{
			link: 'https://reacttraining.com/react-router/',
			imgAltText: 'React Router',
			imgSrc: L_REACT_ROUTER,
			skillName: 'React Router',
		},
		{
			link: 'https://react.semantic-ui.com/',
			imgAltText: 'Semantic UI',
			imgSrc: L_SEMANTIC_UI,
			skillName: 'Semantic UI',
		},
		{
			link: 'https://react-bootstrap.github.io/',
			imgAltText: 'React Bootstrap',
			imgSrc: L_REACT_BOOTSTRAP,
			skillName: 'React Bootstrap',
		},
	],

	backend: [
		{
			link: 'https://spring.io/projects/spring-boot',
			imgAltText: 'Spring Boot',
			imgSrc: L_SPRING,
			skillName: 'Spring Boot',
		},
		{
			link: 'https://www.java.com/en/',
			imgAltText: 'Java',
			imgSrc: L_JAVA,
			skillName: 'Java',
		},
		{
			link: 'https://junit.org/junit4/',
			imgAltText: 'JUnit',
			imgSrc: L_JUNIT,
			skillName: 'JUnit',
		},

		{
			link: 'https://site.mockito.org/',
			imgAltText: 'Mockito',
			imgSrc: L_MOCKITO,
			skillName: 'Mockito',
		},
		{
			link: 'https://docs.oracle.com/javaee/6/tutorial/doc/gijqy.html',
			imgAltText: 'REST',
			imgSrc: L_REST,
			skillName: 'REST Web Services',
		},
		{
			link: 'https://graphql.org/',
			imgAltText: 'GraphQL',
			imgSrc: L_GRAPHQL,
			skillName: 'GraphQL',
		},
	],
	hostingPlatforms: [
		{
			link: 'https://pages.github.com/',
			imgAltText: 'GitHub Pages',
			imgSrc: L_GITHUB_PAGES,
			skillName: 'GitHub Pages',
		},
		{
			link: 'https://www.docker.com/',
			imgAltText: 'Docker',
			imgSrc: L_DOCKER,
			skillName: 'Docker',
		},
	],
	ides: [
		{
			link: 'https://www.eclipse.org/ide/',
			imgAltText: 'Eclipse',
			imgSrc: L_ECLIPSE,
			skillName: 'Eclipse',
		},
		{
			link: 'https://code.visualstudio.com/',
			imgAltText: 'Visual Studio Code',
			imgSrc: L_VSCODE,
			skillName: 'Visual Studio Code',
		},{
			link: 'https://www.jetbrains.com/idea/',
			imgAltText: 'IntelliJ IDEA',
			imgSrc: L_INTELLIJ,
			skillName: 'Intellij IDEA',
		},
		{
			link: 'https://www.oracle.com/in/database/sqldeveloper/',
			imgAltText: 'SQL Developer',
			imgSrc: L_SQLDEV,
			skillName: 'SQL Developer',
		},
	],
	programmingLanguages: [
		{
			link: 'https://www.java.com/en/',
			imgAltText: 'Java',
			imgSrc: L_JAVA,
			skillName: 'Java',
		},
		{
			link: 'https://www.javascript.com/',
			imgAltText: 'JavaScript',
			imgSrc: L_JAVASCRIPT,
			skillName: 'JavaScript',
		},
	],
	databases: [
		{
			link: 'https://www.oracle.com/in/database/',
			imgAltText: 'Oracle Database',
			imgSrc: L_ORACLE,
			skillName: 'Oracle Database',
		},
		{
			link: 'https://www.h2database.com/html/main.html',
			imgAltText: 'H2 Database',
			imgSrc: L_H2,
			skillName: 'H2 Database',
		},
	],

	monitoring: [
		{
			link: 'https://grafana.com/',
			imgAltText: 'Grafana',
			imgSrc: L_GRAFANA,
			skillName: 'Grafana',
		},
		{
			link: 'https://prometheus.io/',
			imgAltText: 'Prometheus',
			imgSrc: L_PROMETHEUS,
			skillName: 'Prometheus',
		},

		{
			link: 'https://micrometer.io/',
			imgAltText: 'Micrometer',
			imgSrc: L_MICROMETER,
			skillName: 'Micrometer',
		},
	],
	versionControl: [
		{
			link: 'https://git-scm.com/',
			imgAltText: 'GIT',
			imgSrc: L_GIT,
			skillName: 'GIT',
		},
		{
			link: 'https://www.perforce.com/',
			imgAltText: 'PERFORCE',
			imgSrc: L_PERFORCE,
			skillName: 'PERFORCE',
		},
	],
};
