<?php
use \page\RBEA\LogInAndLogOut;
use \page\RBEA\CommonFunctionsPage;
use \Facebook\WebDriver\Remote\RemoteWebDriver;
use \Facebook\WebDriver\WebDriverBy;
use \Facebook\WebDriver\WebDriverKeys;

class PricingListCest
{
    public $pricingListBlock = 'div[data-title="Pricing List"]';
    public $fPricingListBlock = 'div.responsive-block-editor-addons-block-pricing-list';

    /**
     * General Settings
     */
    public $numberOfItems = '//*[contains(@id, "inspector-input-control") and @aria-label="Number of Items"]';
    public $columns = '//*[contains(@id, "inspector-input-control") and @aria-label="Columns"]';
    public $fColumns = '//div[contains(@class, "responsive-block-editor-addons-block-pricing-list-no-of-columns-2")]';
    public $imageStyleBtn = '//button[text()="Image"]';
    public $selectImageBtn = '(//button[text()="Select Image"])[1]';
    public $mediaLibraryBtn = '#menu-item-browse';
    public $selectedBackgroundAttachment = '//*[contains(@id, "__attachments-view")]/li[1]';
    public $selectBtn = '//*[text()="Select"]';    
    public $widthInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Width"]';
    public $fImageWrap = 'div.responsive-block-editior-addons-pricing-list-item-image-wrap';
    public $fImage = 'div.responsive-block-editior-addons-pricing-list-item-image-wrap > img';

    /**
     * Separator Settings
     */
    public $separatorWidth = '//*[contains(@id, "inspector-input-control") and @aria-label="Separator Width (%)"]';
    public $separatorThickness = '//*[contains(@id, "inspector-input-control") and @aria-label="Separator Thickness"]';
    public $separatorColor = '//*[@class="components-circular-option-picker__swatches"]//div[2]/button';
    public $fSeparator = '(//div[@class="responsive-block-editior-addons-pricing-list-item-separator"])[1]';
    
    /**
     * Color style settings
     */
    public $titleColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[1]';
    public $contentColor = '(//*[@class="components-circular-option-picker__swatches"]//div[2]/button)[2]';
    public $priceColor = '(//*[@class="components-circular-option-picker__swatches"]//div[1]/button)[3]';
    public $fItemTitle = '(//h4[@class="responsive-block-editior-addons-pricing-list-item-title"])[1]';
    public $fItemDescription = '(//div[@class="responsive-block-editior-addons-pricing-list-item-description"])[1]';
    public $fItemPrice = '(//div[@class="responsive-block-editior-addons-pricing-list-item-price-wrap"])[1]';

    /**
     * Spacing Settings
     */
    public $rowGapInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Row Gap"]';
    public $columnGapInput = '//*[contains(@id, "inspector-input-control") and @aria-label="Column Gap"]';
    public $titleBottomMargin = '//*[contains(@id, "inspector-input-control") and @aria-label="Title Bottom Margin"]';
    public $topPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Top"]';
    public $bottomPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Bottom"]';
    public $leftPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Left"]';
    public $rightPadding = '//*[contains(@id, "inspector-input-control") and @aria-label="Right"]';
    public $fItemWrap = '(//div[contains(@class, "responsive-block-editior-addons-pricing-list-item-wrap")])[1]';
    public $desktopView2 = '(//button[contains(@id, "desktop")])[2]';
    public $tabletView2 = '(//button[contains(@id, "tablet")])[2]';
    public $mobileView2 = '(//button[contains(@id, "mobile")])[2]';
    public $desktopView3 = '(//button[contains(@id, "desktop")])[3]';
    public $tabletView3 = '(//button[contains(@id, "tablet")])[3]';
    public $mobileView3 = '(//button[contains(@id, "mobile")])[3]';
    public $desktopView4 = '(//button[contains(@id, "desktop")])[4]';
    public $tabletView4 = '(//button[contains(@id, "tablet")])[4]';
    public $mobileView4 = '(//button[contains(@id, "mobile")])[4]';
    public $topPaddingReset = '(//button[text()="Reset"])[4]';
    public $bottomPaddingReset = '(//button[text()="Reset"])[5]';
    public $leftPaddingReset = '(//button[text()="Reset"])[6]';
    public $rightPaddingReset = '(//button[text()="Reset"])[7]';
    public $fColumnGap = '(//div[contains(@class, "responsive-block-editior-addons-pricing-list-item-wrap resp-desktop-column-2")])[1]';
    public $listItemContent = '(//div[@class="responsive-block-editior-addons-pricing-list-item-content"])[1]';

    /**
     * Typography settings
     */
    public $fontSizeInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Font Size"]';
    public $lineHeightInputField = '//*[contains(@id, "inspector-input-control") and @aria-label="Line Height"]';
    public $resetLineHeightBtn = '//*[text() = "Reset"]';
    public $fPriceWrap = '(//div[@class="responsive-block-editior-addons-pricing-list-item-price-wrap"])[1]';

    /**
     * This function runs before running each test.
     */
    public function _before(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $loginAndLogout->userLogin($I);
        $I->amGoingTo('Create a Pricing List block.');
        $commonFunctionsPageObj->addBlock($I); 
        $I->fillField($commonFunctionsPageObj->searchBox, 'pricing list');
        $commonFunctionsPageObj->seeCommonBlockTabs($I);
        $commonFunctionsPageObj->publishAndViewPage($I);
    }

    /**
     * This function runs after running each test.
     */
    public function _after(RBEATester $I, LogInAndLogOut $loginAndLogout, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Remove the Pricing List block.');
        $I->amOnPage('/rbea-block');        
        $I->wait(2);
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $commonFunctionsPageObj->removeBlock($I);
        $loginAndLogout->userLogout($I); 
    }

    /**
     * Tests the general settings
     */
    public function PricingListGeneralSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->resizeWindow(1280, 950);
        $I->amGoingTo('Check the block is present in the frontend.');
        $I->seeElement($this->fPricingListBlock);

        $I->amGoingTo('Change the general settings of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->generalStyleBtn);
        $I->click($this->numberOfItems);
        $commonFunctionsPageObj->field = $this->numberOfItems;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $I->click($this->columns);
        $commonFunctionsPageObj->field = $this->columns;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );

        $I->amGoingTo('Change the images of the list items.');
        $I->click($this->imageStyleBtn);
        $I->wait(1);
        $I->click($this->selectImageBtn);
        $I->click($this->mediaLibraryBtn);
        $I->wait(4);
        $I->click($this->selectedBackgroundAttachment);
        $I->wait(1);
        $I->click($this->selectBtn);
        $I->wait(2);
        $I->wait(1);
        $widthInput = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->widthInput))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->selectOption('Image Position', 'Left');
        $I->wait(1);
        $I->selectOption('Image Size', 'Medium');
        $I->wait(1);
        $I->click($this->widthInput);
        $commonFunctionsPageObj->field = $this->widthInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '200' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the general settings in the frontend.');
        $countItems = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElements(WebDriverBy::className('responsive-block-editior-addons-pricing-list-item-wrap'));
        }); 
        $I->assertCount(2, $countItems);
        $commonFunctionsPageObj->field = $this->fColumns;
        $commonFunctionsPageObj->prop = 'grid-template-columns';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '331.2px 331.2px'); 
        $I->seeElement($this->fImageWrap);
        $commonFunctionsPageObj->field = $this->fImageWrap;
        $commonFunctionsPageObj->prop = 'text-align';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, 'left');  
        $commonFunctionsPageObj->field = $this->fImage;
        $commonFunctionsPageObj->prop = 'width';
        $commonFunctionsPageObj->_checkFrontEndStyle($I, '200px'); 
    }

    /**
     * Tests the Separator settings
     */
    public function PricingListSeparatorSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the general settings of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->separatorStyleBtn);
        $I->wait(1);
        $I->selectOption('Separator Style', 'Dotted');
        $I->click($this->separatorWidth);
        $commonFunctionsPageObj->field = $this->separatorWidth;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '120' ); 
        $I->click($this->separatorThickness);
        $commonFunctionsPageObj->field = $this->separatorThickness;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '3' ); 
        $I->click($this->separatorColor);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the separator settings in the frontned.');
        $I->seeElement($this->fSeparator);
        $commonFunctionsPageObj->field = $this->fSeparator;
        $commonFunctionsPageObj->prop = 'border-top-color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->prop = 'border-top-style';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'dotted');
        $commonFunctionsPageObj->prop = 'border-top-width';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '3px');
    }

    /**
     * Tests the color settings
     */
    public function PricingListColorSettingsTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the color settings of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->colorSettingsStyleBtn);
        $I->wait(1);
        $I->click($this->titleColor);
        $I->click($this->contentColor);  
        $I->click($this->priceColor);
        $commonFunctionsPageObj->publishAndViewPage($I);    
        
        $I->amGoingTo('Check the color settings in the frontend.');
        $commonFunctionsPageObj->field = $this->fItemTitle;
        $commonFunctionsPageObj->prop = 'color';        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');
        $commonFunctionsPageObj->field = $this->fItemDescription;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(16, 101, 156, 1)');
        $commonFunctionsPageObj->field = $this->fItemPrice;
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'rgba(0, 102, 204, 1)');
    }

    /**
     * Tests the color settings
     */
    public function PricingListSpacingTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the row Gap settings of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $views = array($commonFunctionsPageObj->desktopView, $commonFunctionsPageObj->tabletView, $commonFunctionsPageObj->mobileView);
        $inputValues = array('25px', '22px', '20px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $views, $this->fItemWrap, $this->rowGapInput, $inputValues);

        $I->amGoingTo('Change the column Gap settings of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $views = array($this->desktopView2, $this->tabletView2, $this->mobileView2);
        $inputValues = array('14px', '12px', '15px');
        $I->click($this->desktopView2);
        $I->click($this->columnGapInput);
        $commonFunctionsPageObj->field =$this->columnGapInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '14px' );
        $I->click( $this->tabletView2);
        $I->click($this->columnGapInput);
        $commonFunctionsPageObj->field =$this->columnGapInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '16px' );
        $I->click($this->mobileView2);
        $I->click($this->columnGapInput);
        $commonFunctionsPageObj->field =$this->columnGapInput;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '12px' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing settings of the post timeline block.');
        $commonFunctionsPageObj->field = $this->fColumnGap;
        $commonFunctionsPageObj->prop = 'padding-left';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '7px');
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '8px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '6px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the title bottom margin settings of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $views = array($this->desktopView3, $this->tabletView3, $this->mobileView3);
        $inputValues = array('16px', '12px', '13px');
        $this->_spacingTest($I, $commonFunctionsPageObj, $views, $this->fItemTitle, $this->titleBottomMargin, $inputValues);

        $I->amGoingTo('Change the padding settings of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1);
        $I->click($this->desktopView4);
        $arr = array('50px', '30px', '13px', '28px');
        $this->_setPadding($I, $commonFunctionsPageObj, $arr);
        $I->wait(1);
        $I->click($this->tabletView4);
        $arr = array('20px', '10px', '11px', '10px');
        $this->_setPadding($I, $commonFunctionsPageObj, $arr);
        $I->wait(1);
        $I->click($this->mobileView4);
        $arr = array('5px', '8px', '10px', '9px');
        $this->_setPadding($I, $commonFunctionsPageObj, $arr);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the padding settings in the frontend.');
        $commonFunctionsPageObj->field = $this->listItemContent;
        $commonFunctionsPageObj->prop = 'padding';
        $I->resizeWindow(375, 812);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '5px 9px 8px 10px');
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '20px 10px 10px 11px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '50px 28px 30px 13px');
        $I->wait(1);

        $I->amGoingTo('Reset the padding for desktop view');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->spacingStyleBtn);
        $I->wait(1); 
        $rightPaddingResetBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->rightPaddingReset))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->topPaddingReset);
        $I->click($this->bottomPaddingReset);
        $I->click($this->leftPaddingReset);
        $I->click($this->rightPaddingReset);
        $I->wait(1);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the padding settings in the frontend after reset.');
        $commonFunctionsPageObj->field = $this->listItemContent;
        $commonFunctionsPageObj->prop = 'padding';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '10px 0px 0px');
    } 

    /**
     * This is a single spacing test.
     */
    public function _spacingTest($I, $commonFunctionsPageObj, $views, $selector, $input, $inputValues)
    {
        $I->click($views[0]);
        $I->click($input);
        $commonFunctionsPageObj->field = $input;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $inputValues[0] );
        $I->click($views[1]);
        $I->click($input);
        $commonFunctionsPageObj->field = $input;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $inputValues[1] );
        $I->click($views[2]);
        $I->click($input);
        $commonFunctionsPageObj->field = $input;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $inputValues[2] );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the spacing settings of the post timeline block.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'margin-bottom';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $inputValues[0]);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $inputValues[1]);
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $inputValues[2]);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);
    }

    /**
     * This function sets the padding
     */
    public function _setPadding($I, $commonFunctionsPageObj, $arr)
    {
        $I->click($this->topPadding);
        $commonFunctionsPageObj->field = $this->topPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $I->click($this->bottomPadding);
        $commonFunctionsPageObj->field = $this->bottomPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[1] );
        $I->click($this->leftPadding);
        $commonFunctionsPageObj->field = $this->leftPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[2] );
        $I->click($this->rightPadding);
        $commonFunctionsPageObj->field = $this->rightPadding;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[3] );
    }

    /**
     * Tests the typography settings
     */
    public function PricingListTypographyTest(RBEATester $I, CommonFunctionsPage $commonFunctionsPageObj)
    {
        $I->amGoingTo('Change the title typoraphy settings of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->titleTypography);
        $arr = array('25px', '25px', '25px', '50px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->titleTypography, $this->fItemTitle, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '31.25px');

        $I->amGoingTo('Change the description typography of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->descriptionTypography);
        $arr = array('15px', '15px', '15px', '30px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->descriptionTypography, $this->fItemDescription, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '26.25px');

        $I->amGoingTo('Change the price typography of the pricing list block.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->wait(1);
        $I->click($commonFunctionsPageObj->priceTypography);
        $arr = array('10px', '10px', '10px', '20px');
        $this->_typographyTest($I, $commonFunctionsPageObj, $commonFunctionsPageObj->priceTypography, $this->fPriceWrap, $arr);        
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '17.5px');
    }
    
    /**
     * This function performs the typography test.
     */
    public function _typographyTest($I, $commonFunctionsPageObj, $typography, $selector, $arr)
    {
        $I->wait(1);    
        $I->amGoingTo('Change the typography of the pricing list block for desktop view.');
        $I->resizeWindow(1280, 950);
        $I->selectOption('Font Family', 'Actor');
        $I->wait(1);
        $I->click($commonFunctionsPageObj->desktopView);
        $I->wait(1);
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', $arr[0] );
        $I->wait(1);
        $I->selectOption('Font Weight', '600');
        $I->wait(1);
        $resetLineHeightBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetLineHeightBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->lineHeightInputField);
        $commonFunctionsPageObj->field = $this->lineHeightInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '2' );
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the frontend for the typography settings in the desktop view.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-family';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, 'Actor');  
        $commonFunctionsPageObj->prop = 'font-weight';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '600'); 
        $commonFunctionsPageObj->prop = 'line-height';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[3]);
        $commonFunctionsPageObj->prop = 'font-size';
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[0]);
        $I->resizeWindow(375, 812);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[1]);
        $I->wait(1);
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, $arr[2]);
        $I->wait(1);
        $I->resizeWindow(1280, 950);
        $I->wait(1);

        $I->amGoingTo('Change the typography style of the block for mobile and desktop view.');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($typography);
        $I->click($commonFunctionsPageObj->tabletView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '14px' );
        $I->click($commonFunctionsPageObj->mobileView);        
        $I->click($this->fontSizeInputField);
        $commonFunctionsPageObj->field = $this->fontSizeInputField;
        $commonFunctionsPageObj->_setInputFieldKeys( $I, 'xpath', '8px' );
        $commonFunctionsPageObj->publishAndViewPage($I);
        
        $I->amGoingTo('Check the frontend for the typography settings in the tablet and mobile view.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'font-size';
        $I->resizeWindow(965, 1024);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '14px');
        $I->wait(1);
        $I->resizeWindow(375, 812);
        $I->wait(2);
        $commonFunctionsPageObj->_checkFrontEndStyleByXpath($I, '8px');
        $I->wait(1);
        $I->resizeWindow(1280, 950);

        $I->amGoingTo('Reset the line height');
        $I->click($commonFunctionsPageObj->editBlockBtn);
        $I->wait(1);
        $I->click($this->pricingListBlock);
        $I->wait(1);
        $I->click('Style');
        $I->click($commonFunctionsPageObj->typographyStyleBtn);
        $I->click($typography);  
        $resetLineHeightBtn = $I->executeInSelenium(function(RemoteWebDriver $webdriver){
            return $webdriver->findElement(WebDriverBy::xpath($this->resetLineHeightBtn))->getLocationOnScreenOnceScrolledIntoView();
        });
        $I->wait(1);
        $I->click($this->resetLineHeightBtn);
        $commonFunctionsPageObj->publishAndViewPage($I);

        $I->amGoingTo('Check the line height in the frontend.');
        $commonFunctionsPageObj->field = $selector;
        $commonFunctionsPageObj->prop = 'line-height';
    }
}
