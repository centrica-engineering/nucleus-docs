import React from "react";

export const SpecificationList = () => {
  return (
    <>
      <div class="spec-list">
        <p class="property-title">
          <code>type</code>
        </p>
        <dl>
          <div>
            <dt>Attribute</dt>
            <dd>
              <code>type</code>
            </dd>
          </div>
          <div>
            <dt>Property</dt>
            <dd>
              <code>type</code>
            </dd>
          </div>
          <div>
            <dt>Description</dt>
            <dd>The variant of the landmark.</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code> summit</code> <code>hillside</code> <code>lakeside</code>,
              <code>valley </code>
            </dd>
          </div>
          <div>
            <dt>Default</dt>
            <dd>
              <code>summit</code>
            </dd>
          </div>
        </dl>
        <p class="property-title">
          <code>image</code>
        </p>
        <dl>
          <div>
            <dt>Attribute</dt>
            <dd>
              <code>image</code>
            </dd>
          </div>
          <div>
            <dt>Property</dt>
            <dd>
              <code>image</code>
            </dd>
          </div>
          <div>
            <dt>Description</dt>
            <dd>
              Background image used for summit variant or image used for valley
              variant.
            </dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code>string</code>
            </dd>
          </div>
        </dl>
        <p class="property-title">
          <code>decoration</code>
        </p>
        <dl>
          <div>
            <dt>Attribute</dt>
            <dd>
              <code>decoration</code>
            </dd>
          </div>
          <div>
            <dt>Property</dt>
            <dd>
              <code>decoration</code>
            </dd>
          </div>
          <div>
            <dt>Description</dt>
            <dd>
              Background and offset colour used for the Hillside and Valley
              variant.
            </dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code> cyan</code> <code>lime</code> <code>navy</code> <code>blue</code> <code>forest</code> <code>orange</code> <code>red</code> <code>yellow </code>
            </dd>
          </div>
          <div>
            <dt>Default</dt>
            <dd>
              <code>cyan</code>
            </dd>
          </div>
        </dl>
        <p class="property-title">
          <code>pill-over-image</code>
        </p>
        <dl>
          <div>
            <dt>Attribute</dt>
            <dd>
              <code>pill-over-image</code>
            </dd>
          </div>
          <div>
            <dt>Property</dt>
            <dd>
              <code>pillOverImage</code>
            </dd>
          </div>
          <div>
            <dt>Description</dt>
            <dd>
              Used to put the pill in the bottom left of the image when using{" "}
              <code>type="valley"</code> and an image.
            </dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code>boolean</code>
            </dd>
          </div>
          <div>
            <dt>Default</dt>
            <dd>
              <code>false</code>
            </dd>
          </div>
        </dl>
        <p class="property-title">
          <code>ratio</code>
        </p>
        <dl>
          <div>
            <dt>Attribute</dt>
            <dd>
              <code>ratio</code>
            </dd>
          </div>
          <div>
            <dt>Property</dt>
            <dd>
              <code>ratio</code>
            </dd>
          </div>
          <div>
            <dt>Description</dt>
            <dd>Aspect ratio of the image used only for valley variant.</dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code> 16 / 9</code> <code>4 / 3 </code>
            </dd>
          </div>
          <div>
            <dt>Default</dt>
            <dd>
              <code>16 / 9</code> for <code>summit</code> type and{" "}
              <code>4 / 3</code> for <code>valley</code> type
            </dd>
          </div>
        </dl>
      </div>
      <h3>Slots</h3>
      <div class="spec-list">
        <p class="property-title">
          <code>heading</code>
        </p>
        <dl>
          <div>
            <dt>Slot</dt>
            <dd>
              <code>heading</code>
            </dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code>&lt;h1&gt;</code>
            </dd>
          </div>
        </dl>
        <p class="property-title">
          <code>paragraph</code>
        </p>
        <dl>
          <div>
            <dt>Slot</dt>
            <dd>
              <code>paragraph</code>
            </dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code>&lt;p&gt;</code> <code>&lt;div&gt;</code>
            </dd>
          </div>
        </dl>
        <p class="property-title">
          <code>cta</code>
        </p>
        <dl>
          <div>
            <dt>Slot</dt>
            <dd>
              <code>cta</code>
            </dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code>&lt;ns-cta&gt;</code> <code>&lt;a&gt;</code>
            </dd>
          </div>
        </dl>
        <p class="property-title">
          <code>pill</code>
        </p>
        <dl>
          <div>
            <dt>Slot</dt>
            <dd>
              <code>pill</code>
            </dd>
          </div>
          <div>
            <dt>Type</dt>
            <dd>
              <code>&lt;ns-pill&gt;</code>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
};
