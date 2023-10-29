const area = new SGT_Area();

function setRegion() {
  let html = "<option value='' selected disabled>เลือกภูมิภาค :</option>";

  area.getRegion().forEach(e => {
    html += `<option value="${e.pos}">${e.name}</option>`;
  });

  $("#region").html(html);
}

function setZone(pos) {
  let html = "<option value='' selected disabled>เลือกรวมภาค :</option>";
  
  area.getZone(pos).forEach(e => {
    html += `<option value="${e.pos}">${e.name}</option>`;
  });

  $("#zone").html(html);
  $("#zone").removeAttr("disabled");

}

function setSector() {
  const rg_pos = $("#region").val();
  const zone_pos = $("#zone").val();;
  let html = "<option value='' selected disabled>เลือกภาค :</option>";

  area.getSector(rg_pos, zone_pos).forEach(e => {
    html += `<option value="${e.pos}">${e.name}</option>`;
  });

  $("#sector").html(html);
  $("#sector").removeAttr("disabled");
}

function setDistrict() {
  const rg_pos = $("#region").val();
  const zone_pos = $("#zone").val();
  const sec_pos = $("#sector").val();
  let html = "<option value='' selected disabled>เลือกเขต :</option>";

  area.getDistrict(rg_pos, zone_pos, sec_pos).forEach(e => {
    html += `<option value="${e.pos}">${e.name}</option>`;
  });

  $("#district").html(html);
  $("#district").removeAttr("disabled");
}

$("form").submit(e => { 
  e.preventDefault();

  const region = ($("#region").val()) ? $("#region option:selected").text() : "-";
  const zone = ($("#zone").val()) ? $("#zone option:selected").text() : "-";
  const sector = ($("#sector").val()) ? $("#sector option:selected").text() : "-";
  const district = ($("#district").val()) ? $("#district option:selected").text() : "-";

  Swal.fire({
    position: "center",
    title: "ระบบการของคุณ",
    html: `ภูมิภาค: ${region} <br> รวมภาค: ${zone} <br> ภาค: ${sector} <br> เขต: ${district}`,
    color: "#1C3879",
    confirmButtonColor: "#1C3879",
    confirmButtonText: "ตกลง"
  });
});