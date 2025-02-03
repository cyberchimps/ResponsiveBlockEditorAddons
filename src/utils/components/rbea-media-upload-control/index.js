import PropTypes from 'prop-types';
import { useState } from 'react';
import { Button, IconButton, ToggleControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import { media } from '@wordpress/media-utils';
import { Trash } from '@wordpress/icons';

const RbeaMediaUploadControl = ({ label, description, value, onChange , mediaType}) => {
    const [mediaData, setMediaData] = useState(value);

    const mediaTypeCapitalCase = mediaType.charAt(0).toUpperCase() + mediaType.slice(1).toLowerCase();
    // Function to handle media selection from media library
    const handleMediaSelect = (media) => {
        const updatedValue = { ...mediaData, url: media.url ,sizes: media.sizes, alt: media.alt};
        setMediaData(updatedValue);
        onChange(updatedValue);
    };

    // Function to open the media modal
    const selectMedia = () => {
        const frame = wp.media({
            title: __(`Select Background ${mediaType}`, 'responsive-block-editor-addons'),
            button: { text: __('Select', 'responsive-block-editor-addons') },
            multiple: false, // Disable multiple selections
            library: {
                type: `${mediaType}` // Restrict to media files only
            }
        });

        frame.on('select', () => {
            const media = frame.state().get('selection').first().toJSON();
            handleMediaSelect(media);
        });

        frame.open();
    };

    // Function to remove the selected media
    const removeMedia = () => {
        const updatedValue = { ...mediaData, url: '', alt: '' };
        setMediaData(updatedValue);
        onChange(updatedValue);
    };

    return (
        <div className="rbea-media-upload-control">
             <div className="rbea-control__header">
                <div className="uag-responsive-label-wrap">
                    <span className="uag-control-label">{__(`${label}`, 'responsive-block-editor-addons')}</span>
                </div>
            </div>

            {(
                <div className="media-control-wrapper" style={{ position: 'relative' }}>
                    {!mediaData.url ? (
                        <div className="media-placeholder" onClick={selectMedia}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                               <path fill-rule="evenodd" clip-rule="evenodd" d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12ZM12 18C11.4477 18 11 17.5523 11 17V13H7C6.44772 13 6 12.5523 6 12C6 11.4477 6.44772 11 7 11H11V7C11 6.44772 11.4477 6 12 6C12.5523 6 13 6.44772 13 7V11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H13V17C13 17.5523 12.5523 18 12 18Z" fill="#666666"/>
                            </svg>

                        </div>
                    ) : (
                        <div className="media-selected">
                            {mediaType == 'image' && 
                              <img
                              
                               src={mediaData.url}
                               alt={__(`${mediaData.alt}`, 'responsive-block-editor-addons')}
                              />
                            }
                            {mediaType == 'video' && 
                              <video preload="" autoplay="" muted="" playsinline="" loop="">
                                <source src={`${mediaData.url}`} type="video/mp4"/>
                              </video> 
                            }
                           
                          
                            <svg class="bgmedia-remove-btn" width="32" height="32" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"  onClick={removeMedia}>
                                <circle cx="10" cy="10" r="10" fill="#F2F2F2"/>
                                <path d="M8.54175 11.4583L8.54175 9.70825" stroke="#666666" stroke-width="0.8" stroke-linecap="round"/>
                                <path d="M11.4583 11.4583L11.4583 9.70825" stroke="#666666" stroke-width="0.8" stroke-linecap="round"/>
                                <path d="M4.75 6.79175H15.25V6.79175C15.2113 6.79175 15.192 6.79175 15.1756 6.79202C14.0967 6.80967 13.2263 7.68007 13.2086 8.75902C13.2083 8.77539 13.2083 8.79473 13.2083 8.83342V11.1667C13.2083 12.2947 13.2083 12.8587 12.9874 13.2889C12.7964 13.6606 12.4939 13.9632 12.1221 14.1541C11.692 14.3751 11.128 14.3751 10 14.3751V14.3751C8.87203 14.3751 8.30805 14.3751 7.87786 14.1541C7.50614 13.9632 7.20357 13.6606 7.01263 13.2889C6.79167 12.8587 6.79167 12.2947 6.79167 11.1667V8.83342C6.79167 8.79473 6.79167 8.77539 6.7914 8.75902C6.77374 7.68007 5.90334 6.80967 4.82439 6.79202C4.80803 6.79175 4.78869 6.79175 4.75 6.79175V6.79175Z" stroke="#666666" stroke-width="0.8" stroke-linecap="round"/>
                                <path d="M8.54159 5.04173C8.54159 5.04173 8.83325 4.45825 9.99992 4.45825C11.1666 4.45825 11.4583 5.04159 11.4583 5.04159" stroke="#666666" stroke-width="0.8" stroke-linecap="round"/>
                            </svg>
                        </div>
                    )}

                    {/* Change Media Button */}
                    <Button 
                        className = "bgmedia-select-button"
                        onClick={selectMedia}
                    >
                        {mediaData.url ? __(`Change ${mediaTypeCapitalCase}`, 'responsive-block-editor-addons') : __(`Select ${mediaTypeCapitalCase}`, 'responsive-block-editor-addons')}
                    </Button>
                </div>
            )}

            {description && <p className="media-description" style={{ marginTop: '10px' }}>{description}</p>}
        </div>
    );
};

RbeaMediaUploadControl.propTypes = {
    label: PropTypes.string,
    description: PropTypes.string,
    value: PropTypes.shape({
        url: PropTypes.string,
    }),
    onChange: PropTypes.func.isRequired,
};

export default RbeaMediaUploadControl;
