export default `
<ns-inputter heading="What options do you like?" helper="How can we help you?" validation="[&quot;isRequired&quot;]" name="checkboxes">
  <div slot="tip-details">By providing clarification on why this information is necessary.</div>
  <input checked type="checkbox" name="checkboxes" value="a" id="checkbox-01">
  <label for="checkbox-01">Option A</label>
  <input type="checkbox" name="checkboxes" value="b" id="checkbox-02">
  <label for="checkbox-02">Option B</label>
  <input type="checkbox" name="checkboxes" value="c" id="checkbox-03">
  <label for="checkbox-03">Option C</label>
</ns-inputter>
`;
