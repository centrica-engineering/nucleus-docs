export default `
<ns-inputter value validation="[&quot;isRequired&quot;]" name="select">
  <label slot="label">Select</label>
  <select name="select">
    <option value>Please select</option>
    <option value="value-01">Value one</option>
    <option selected value="value-02">Value two</option>
    <option value="value-03">Value three</option>
    <option value="value-04">Value four</option>
  </select>
</ns-inputter>
`;
