/**
 * Common js file for popup.
 */
(function ($) {
    // document is ready.
    $(function () {

        let body = document.body;
        let isModalWrapPresent = body.querySelector('div.responsive-block-editor-addons-popup-modal-wrap') !== null;

        if (isModalWrapPresent) {

            $modal = $('.responsive-block-editor-addons-popup-modal-wrap')

            function openModal(popupId = 0) {
                if ( popupId == 0 ) {
                    $modal.removeClass('responsive-block-editor-popup-modal-hide')
                    $modal.addClass('responsive-block-editor-popup-modal-show')
                    return
                }
                $modal.filter('[data-popup-id="popup-' + popupId + '"]').removeClass('responsive-block-editor-popup-modal-hide');
                $modal.filter('[data-popup-id="popup-' + popupId + '"]').addClass('responsive-block-editor-popup-modal-show');
            }

            function hideModal() {
                $modal.addClass('responsive-block-editor-popup-modal-hide')
                $modal.removeClass('responsive-block-editor-popup-modal-show')
            }

            let interval = parseInt($modal.data('trigger-delay')) * 1000

            if ( 'load' === $modal.data('trigger-type') ) {
                setTimeout(() => {
                    openModal()
                }, interval);
            }

            $('.responsive-block-editor-addons-popup-modal-trigger').on('click', function(e) {
                let targetElement = e.target.closest('.responsive-block-editor-addons-popup-modal-trigger');
                popupId = targetElement.dataset.triggerId.replace(/^trigger-/i, "")
                openModal(popupId)
            });

            $('.responsive-block-editor-addons-popup-modal-wrap-overlay, .responsive-block-editor-addons-popup-modal-header button[type="button"]').on('click', hideModal)
        }
    });
})(jQuery);
