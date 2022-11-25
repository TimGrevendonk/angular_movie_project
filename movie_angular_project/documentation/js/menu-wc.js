'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">movie-project documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-f3a9aa9f56d4b42d14933172fcc45093de5117578889cf15b5c1d6bcda0e44f4e14c226edef0148fc90efe3e146a80d31b3544d99b653dfa1d91a9eb31624428"' : 'data-target="#xs-components-links-module-AppModule-f3a9aa9f56d4b42d14933172fcc45093de5117578889cf15b5c1d6bcda0e44f4e14c226edef0148fc90efe3e146a80d31b3544d99b653dfa1d91a9eb31624428"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-f3a9aa9f56d4b42d14933172fcc45093de5117578889cf15b5c1d6bcda0e44f4e14c226edef0148fc90efe3e146a80d31b3544d99b653dfa1d91a9eb31624428"' :
                                            'id="xs-components-links-module-AppModule-f3a9aa9f56d4b42d14933172fcc45093de5117578889cf15b5c1d6bcda0e44f4e14c226edef0148fc90efe3e146a80d31b3544d99b653dfa1d91a9eb31624428"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomepageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HomepageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieDetailComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieDetailComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationbarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SearchlistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SearchlistComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-ae787f503d994bbbf74f6e2e1184e615fba8bb0d91696c597ab3fbdc6c3ed6b194b515c90b69698123a984d8849de79cfe139bd46c382a066c608df7aaf7fdf4"' : 'data-target="#xs-components-links-module-SharedModule-ae787f503d994bbbf74f6e2e1184e615fba8bb0d91696c597ab3fbdc6c3ed6b194b515c90b69698123a984d8849de79cfe139bd46c382a066c608df7aaf7fdf4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-ae787f503d994bbbf74f6e2e1184e615fba8bb0d91696c597ab3fbdc6c3ed6b194b515c90b69698123a984d8849de79cfe139bd46c382a066c608df7aaf7fdf4"' :
                                            'id="xs-components-links-module-SharedModule-ae787f503d994bbbf74f6e2e1184e615fba8bb0d91696c597ab3fbdc6c3ed6b194b515c90b69698123a984d8849de79cfe139bd46c382a066c608df7aaf7fdf4"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MovieListComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MovieListComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavigationbarComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavigationbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-ae787f503d994bbbf74f6e2e1184e615fba8bb0d91696c597ab3fbdc6c3ed6b194b515c90b69698123a984d8849de79cfe139bd46c382a066c608df7aaf7fdf4"' : 'data-target="#xs-pipes-links-module-SharedModule-ae787f503d994bbbf74f6e2e1184e615fba8bb0d91696c597ab3fbdc6c3ed6b194b515c90b69698123a984d8849de79cfe139bd46c382a066c608df7aaf7fdf4"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-ae787f503d994bbbf74f6e2e1184e615fba8bb0d91696c597ab3fbdc6c3ed6b194b515c90b69698123a984d8849de79cfe139bd46c382a066c608df7aaf7fdf4"' :
                                            'id="xs-pipes-links-module-SharedModule-ae787f503d994bbbf74f6e2e1184e615fba8bb0d91696c597ab3fbdc6c3ed6b194b515c90b69698123a984d8849de79cfe139bd46c382a066c608df7aaf7fdf4"' }>
                                            <li class="link">
                                                <a href="pipes/SnubTextPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SnubTextPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedRoutingModule.html" data-type="entity-link" >SharedRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/WatchedListModule.html" data-type="entity-link" >WatchedListModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WatchedListModule-4c31d6137161d51e2a5ec1440d5d236f5c8b9bd5b266cba671260264080e14f7eeb176cb3c1359f4c34346733db8feb5088f52a536b32c58899e87cdf72603f2"' : 'data-target="#xs-components-links-module-WatchedListModule-4c31d6137161d51e2a5ec1440d5d236f5c8b9bd5b266cba671260264080e14f7eeb176cb3c1359f4c34346733db8feb5088f52a536b32c58899e87cdf72603f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WatchedListModule-4c31d6137161d51e2a5ec1440d5d236f5c8b9bd5b266cba671260264080e14f7eeb176cb3c1359f4c34346733db8feb5088f52a536b32c58899e87cdf72603f2"' :
                                            'id="xs-components-links-module-WatchedListModule-4c31d6137161d51e2a5ec1440d5d236f5c8b9bd5b266cba671260264080e14f7eeb176cb3c1359f4c34346733db8feb5088f52a536b32c58899e87cdf72603f2"' }>
                                            <li class="link">
                                                <a href="components/WatchlistComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WatchlistComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/MovieService.html" data-type="entity-link" >MovieService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/Genre.html" data-type="entity-link" >Genre</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Movie.html" data-type="entity-link" >Movie</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});