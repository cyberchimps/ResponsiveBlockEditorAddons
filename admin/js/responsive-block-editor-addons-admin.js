import React, {useState, useEffect} from "react";
import ReactDOM from "react-dom";
import {HelpContents, Categories} from './ContentList';
import 'regenerator-runtime/runtime';
const { __ } = wp.i18n;

const GettingStarted = () => {
    const [hash, setHash] = useState(window.location.hash.substring(1))
    const [showCategory, setShowCategory] = useState('all')
    window.location.hash = hash
    if ( hash === '' ) {
        window.location.hash = '#blocks'
        setHash('blocks')
    }
    
    return(
        <div className="rbea-getting-started-page">
            <Header />
            <div className="rbea-tabs-section">
                <div className="rbea-tabs">
                    <Tab hash={hash} setHash={setHash} />
                </div>
            </div>
            <div className="rbea-tabs-content">
                <div className="rbea-tabs-inner-content" style={hash == 'templates' ? {backgroundImage: 'url(' + rbealocalize.responsiveurl + "admin/images/rst-template-preview.jpg" + ')'} : {backgroundImage:'none'}}>
                    <div className="rbea-blocks-content rbea-tab-content" style={hash == 'blocks' ? {display:'block'} : {display:'none'}} id="rbea_blocks">
                        {hash == 'blocks' && <Blocks showCategory={showCategory} setShowCategory={setShowCategory} /> }
                    </div>
                    <div className="rbea-templates-content rbea-tab-content" style={hash == 'templates' ? {display:'block'} : {display:'none'}} id="rbea_templates">
                        {hash == 'templates' && <StarterTemplates /> }
                    </div>
                    <div className="rbea-help-content rbea-tab-content" style={hash == 'help' ? {display:'block'} : {display:'none'}} id="rbea_help">
                        {hash == 'help' && <Help /> }
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

const Tab = ({hash, setHash}) => {
    const tabList = ['blocks', 'templates', 'help']
    return (
        <>
            {
                tabList.map((current) => {
                    return (
                        <>
                            <div className={"rbea-tab rbea-templates-tab " + (hash == current || hash == '' ? 'rbea-active-tab' : '')} data-tab="blocks" onClick={() => setHash(current)}>
                                <p className="rbea-tab-name">
                                    {
                                        current == 'templates' ? __('Starter Templates','responsive-block-editor-addons') : __(current.charAt(0).toUpperCase() + current.slice(1),'responsive-block-editor-addons')
                                    }
                                </p>
                            </div>
                        </>
                    )
                })
            }
        </>
    )
}

const Help = () => {

    return(
        <div className="container">
            <div className="row gy-4">
                {
                    HelpContents.map((current) => {
                        return (
                            <div className="col-xl-4 col-lg-6 col-md-6">
                                <div className="rbea-help-feature-cards h-100">
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img src={rbealocalize.responsiveurl + '/admin/images/' + current.icon} />
                                        </div>
                                        <div className="col-md-10">
                                            <p className="rbea-help-title">{current.title}</p>
                                            <p className="rbea-help-desc">{current.desc}</p>
                                            {
                                                current.links.map((currentLink, linkIndex) => {
                                                    return (
                                                        <>
                                                            <a className="rbea-help-links" href={currentLink.url} target="_blank">{currentLink.title}</a>
                                                            { linkIndex < current.links.length - 1
                                                            ?
                                                            <span className="rbea-help-links-divider">|</span>
                                                            :
                                                            null
                                                            }   
                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

const StarterTemplates = () => {

    useEffect(() => {
      if ( rbealocalize.rst_status == 'activated' ) {
        window.location.href = rbealocalize.rst_redirect
      }
    }, [])
    

    const [buttonText, setButtonText] = useState(rbealocalize.rst_status === 'install' ? 'Install & Activate' : rbealocalize.rst_status.charAt(0).toUpperCase() + rbealocalize.rst_status.slice(1));
    const [buttonClass, setButtonClass] = useState('rbea-install-plugin install-now button');

    // Function to handle plugin installation.
    const handleInstall = (e) => {
        e.preventDefault();
        const button = e.target;
        const slug = button.getAttribute('data-slug');
        const url = button.getAttribute('href');
        const redirect = button.dataset.redirect;

        setButtonText(rbealocalize.installing + '...');
        setButtonClass('rbea-install-plugin install-now button updating-message');

        wp.updates.installPlugin({
            slug: slug,
            success: function () {
                setButtonText(rbealocalize.activating + '...');
                setButtonClass('rbea-install-plugin install-now button updating-message');
                activatePlugin(url, redirect);
            },
        });
    };

    // Function to handle plugin activation.
    const handleActivation = (e) => {
        e.preventDefault
        const button = e.target;
        const slug = button.getAttribute('data-slug');
        const url = button.getAttribute('href');
        const redirect = button.dataset.redirect;
        setButtonText(rbealocalize.activating + '...');
        activatePlugin(url, redirect);
    }

    // Function to activate the plugin.
    const activatePlugin = (url, redirect) => {
        if (typeof url === 'undefined' || !url) {
            return;
        }
        fetch(url, { method: 'GET' })
        .then((response) => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then((data) => {
            if (typeof redirect !== 'undefined' && redirect !== '') {
                window.location.replace(redirect);
            } else {
                window.location.reload();
            }
        })
        .catch((error) => {
            console.log(error);
        });
    };

    const generateButton = (rstStatus, rstRedirect, rstNonce) => {
        switch (rstStatus) {
          case 'install':
            return (
                <div class="plugin-card-responsive-add-ons" style={{padding: '8px 0 5px'}}>
                    <a
                        id="rbea-rst"
                        data-redirect={rstRedirect}
                        data-slug="responsive-add-ons"
                        className="rbea-install-plugin install-now button"
                        href={rstNonce}
                        data-name="responsive-add-ons"
                        aria-label="Install responsive-add-ons"
                        onClick={handleInstall}
                    >
                        {__(buttonText, 'responsive-add-ons')}
                    </a>
              </div>
            );
          case 'activate':
            return (
                <div class="plugin-card-responsive-add-ons" style={{padding: '8px 0 5px'}}>
                    <a
                        data-redirect={rstRedirect}
                        data-slug="responsive-add-ons"
                        className="rbea-activate-plugin activate-now button button-primary"
                        href={rstNonce}
                        aria-label="Activate responsive-add-ons"
                        onClick={handleActivation}
                    >
                        {__(buttonText, 'responsive-add-ons')}
                    </a>
              </div>
            );
          case 'activated':
            return (
                <div class="plugin-card-responsive-add-ons" style={{padding: '8px 0 5px'}}>
                    <button
                        className="rbea-plugin-activated-button-disabled button"
                        aria-label="Activated responsive-add-ons"
                    >
                        {__('Activated', 'responsive-add-ons')}
                    </button>
              </div>
            )
        }
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8 offset-md-2 col-12">
                    <div className="rbea-rst-content">
                        <div className="rbea-text-content text-center">
                            <img className="rbea-responsive-logo rounded mx-auto d-block" src={rbealocalize.responsiveurl + 'admin/images/responsive-starter-templates-thumbnail.png'} alt="" />
                            <div className="rbea-brand-text mt-4">
                                <p className="rbea-rst-brand-name">{ __( 'Responsive Starter Templates', 'responsive-block-editor-addons' ) }</p>
                                <p className="rbea-rst-brand-desc">{ __( 'Browse 150+ fully-functional ready site templates by installing the free Responsive Starter Templates plugin. Click the button below to get started.', 'responsive-block-editor-addons' )}</p>
                            </div>
                            <div className="rbea-rst-button-section">
                                {generateButton(rbealocalize.rst_status, rbealocalize.rst_redirect, rbealocalize.rst_nonce)}
                                <div className="rbea-rst-learn-more">
                                    <a href={rbealocalize.rst_url} target="_blank">{ __( 'Learn More', 'responsive-block-editor-addons' )}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Blocks = ({showCategory, setShowCategory}) => {
    const [blockList, setBlockList] = useState(rbealocalize.rbea_blocks)
    const [search, setSearch] = useState('')
    const areAllBlocksSelected = blockList.every((block) => block.status == 1);
    const [toggleAll, setToggleAll] = useState(areAllBlocksSelected)
    const [isInitialized, setIsInitialized] = useState(false);

    const displayToast = ( msg, status ) => {
        let background = status === 'error' ? '#FF5151' : '#00CF21';
        Toastify({
            text: msg,
            duration: 3000,
            gravity: "top", 
            position: "center",
            stopOnFocus: true,
            offset: {
                x: 0,
                y: 30
            },
            style: {
                background,
            },
        }).showToast();
    }

    const fetchData = async (data) => {
        const formData = new FormData()

        formData.append( 'action', 'rbea_blocks_toggle' );
        formData.append( 'nonce', rbealocalize.nonce );
        formData.append( 'value', JSON.stringify( data ) );

        const response = await fetch(rbealocalize.ajaxurl, {
            method: 'POST',
            body: formData
        })

        response.status === 200 ? displayToast('Settings Saved','success') : displayToast('Error','error')
        return response.json() 
    }

    const handleToggle = (checkboxKey) => {
        setBlockList((prevCheckboxes) => {
            const updatedBlockList = prevCheckboxes.map((checkbox) =>
                checkbox.key === checkboxKey ? { ...checkbox, status: !checkbox.status } : checkbox
            );

            const areAllUpdatedBlocksChecked = updatedBlockList.every((block) => block.status == 1);
            setToggleAll(areAllUpdatedBlocksChecked)

            if (isInitialized) {
                fetchData(updatedBlockList);
            }
            return updatedBlockList;
        });
    };

    const handleToggleAll = () => {
        setToggleAll(!toggleAll)
        setBlockList((prevCheckboxes) => { const updatedBlockList = prevCheckboxes.map((checkbox) =>({ ...checkbox, status: !toggleAll }));
            fetchData(updatedBlockList);
            return updatedBlockList;
        });
    }
    
    // Set the initialization flag after the first render
    useState(() => {
        setIsInitialized(true);
    }, []);

    return (
        <div className="container">
            <div className="row rbea-blocks-nav-container">
                <div className="col-lg-9">
                    <div className="rbea-blocks-list">
                        <p>
                            {
                                Categories.map((current, index) => {
                                    return (
                                        <>
                                            <span className={"rbea-blocks-category rbea-blocks-tab pointer " + (showCategory == current.key ? 'rbea-active-blocks-category' : '')} id={current.key} onClick={() => {setShowCategory(current.key);setSearch('')}}>{__( current.title, 'responsive-block-editor-addons' )}</span>
                                            { index < Categories.length - 1 ? <span className="rbea-blocks-category mx-lg-3 mx-sm-2 mx-2">|</span> : '' } 
                                        </>
                                    )
                                })
                            }
                        </p>
                    </div>
                </div>
                <div className="col-lg-3 text-center">
                    <div className="rbea-blocks-search-box">
                        <input type="text" id="rbea-input-search-blocks" autocomplete="off" placeholder={__( 'Search Blocks', 'responsive-block-editor-addons' )} onChange={(e) => setSearch(e.target.value)} value={search} />
                        <i className="rbea-blocks-search-icon"><span className="dashicons dashicons-search"></span></i>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 my-5">
                    <div className="row">
                        <div className="rbea-blocks-toggle-all-blocks-section d-flex justify-content-center">
                            <div className="rbea-blocks-toggle-all-text-content">
                                <p className="rbea-blocks-toogle-block-title text-center">{__( 'Toggle All Blocks', 'responsive-block-editor-addons' )}
                                </p>
                                <p className="rbea-blocks-toogle-block-desc text-center">{__( 'You can disable some blocks for faster page speed.', 'responsive-block-editor-addons' )}</p>
                            </div>
                            <div className="rbea-blocks-toggle-block-switch">
                                <label className="rbea-blocks-switch mt-2">
                                    <input id="rbea-blocks-toggle-blocks" type="checkbox" onChange={(e) => handleToggleAll()} checked={toggleAll} />
                                    <span className="rbea-blocks-slider rbea-blocks-round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row rbea-block-cards-group">
                <Cards blockList={blockList} setBlockList={setBlockList} showCategory={showCategory} search={search} handleToggle={handleToggle} />
            </div>
        </div>
    )
}

const Cards = ({blockList, showCategory, search, handleToggle}) => {

    return (
        blockList.map((current, index) => {
            return (
                <>
                {
                    search == ''
                    ?
                    <>
                        {(current.category == showCategory || 'all' == showCategory) && <Card blockList={blockList} handleToggle={handleToggle} category={current.category} title={current.title} docs={current.docs} demo={current.demo} status={current.status} index={index} blockKey={current.key} />}
                    </>
                    :
                    <>
                        {current.title.toLowerCase().includes(search) && <Card blockList={blockList} handleToggle={handleToggle} category={current.category} title={current.title} docs={current.docs} demo={current.demo} status={current.status} index={index} blockKey={current.key} />}
                    </>
                }
                </>
            )
        })
    )
}

const Card = ({handleToggle, category, title, docs, demo, status, index, blockKey}) => {

    return (
        <div className={"col-lg-4 col-md-4 gy-3 rbea-block-category-card rbea-block-category-" + (category)}>
            <div className="rbea-blocks-card d-flex justify-content-between h-100">
                <div className="rbea-blocks-card-text-content">
                    <div className="rbea-blocks-card-title"><p>{__(title, 'responsive-block-editor-addons')}</p></div>                    

                    <a className="rbea-blocks-docs-demo-links d-flex" href={demo} target="_blank">
                        <div class="rbea-widgets-card-demo-text">{__( 'Demo', 'responsive-block-editor-addons' )}</div>
                        <img class = "rbea-widgets-card-demo-icon" src={rbealocalize.responsiveurl + 'admin/images/icon-demo.svg'} alt="icon-demo" />&nbsp;
                    </a>                                        
                </div>
                <div className="rbea-blocks-card-switch align-self-center">
                    <label className="rbea-blocks-switch">
                        <input className="rbea-blocks-input-checkbox" data-index={index} type="checkbox" id={blockKey} checked={status} onChange={() => handleToggle(blockKey)} />
                        <span className="rbea-blocks-slider rbea-blocks-round"></span>
                    </label>
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className="rbea-header">
            <div className="rbea-brand">
                <img className="rbea-logo" src={rbealocalize.responsiveurl + 'admin/images/responsive-blocks-logo.svg'} alt="responsive-thumbnail" />
                <div className="rbea-version">{rbealocalize.rbea_version}</div>
            </div>
            <p className="rbea-brand-desc">{__( 'Thank You For Choosing Responsive Blocks – WordPress Gutenberg Blocks Plugin', 'responsive-block-editor-addons' )}</p>
        </div>
    )
}

const Footer = () => {
    return (
        <div className="rbea-footer">
            <div className="rbea-footer-details">
                <div className="rbea-footer-text">
                    <p className="rbea-footer-text-line">{__('If you like', 'responsive-block-editor-addons')}
                    <span className="rbea-footer-brand-name"> {__('Responsive Blocks', 'responsive-block-editor-addons')}</span>, <br className="rbea-mobile-line-break" />{__('please leave us a ', 'responsive-block-editor-addons')} 
                        <a href={rbealocalize.review_link} target="_blank" className="rbea-star-rating">
                            <img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} /><img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} /><img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} /><img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} /><img src={ rbealocalize.responsiveurl + 'admin/images/ph_star-fill.svg'} />
                        </a>{__(' rating. Thank you!', 'responsive-block-editor-addons')}
                    </p>
                </div>
                <div className="rbea-hr"></div>
            </div>
            <img className="rbea-cyberchimps-logo" src={rbealocalize.responsiveurl + 'admin/images/cyberchimps-logo.png'} />
        </div>
    )
}


document.addEventListener('DOMContentLoaded', () => {
    var rbeaGettingStartedPageElement = document.getElementById( 'rbea-getting-started-page-app' );
    if ( typeof rbeaGettingStartedPageElement !== 'undefined' && rbeaGettingStartedPageElement !== null ) {
      ReactDOM.render(<GettingStarted />, rbeaGettingStartedPageElement);
    }
});
