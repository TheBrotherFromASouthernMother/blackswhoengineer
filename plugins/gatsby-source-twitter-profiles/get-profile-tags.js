module.exports = profile => {
  let designerTagsObject = {};
  let description = profile.description;
  function addDesignerTags(searchTerm, objectTag) {
    if (description.toUpperCase().includes(searchTerm) === true) {
      designerTagsObject[objectTag] = true;
    } else {
        designerTagsObject[objectTag] = false;
    }
  }
  addDesignerTags("PRODUCT DESIGN", "product");
  addDesignerTags("DESIGN SYSTEM", "systems");
  addDesignerTags("CONTENT STRATEG", "content");
  addDesignerTags("MANAGER", "manager");
  addDesignerTags("LEAD", "lead");
  addDesignerTags("DESIGNER", "designer");
  addDesignerTags("SPEAKER", "speaker");
  addDesignerTags("ENGINEER", "engineer");
  addDesignerTags("RESEARCH", "research");
  addDesignerTags("DEVOPS", "devops");
  addDesignerTags("FOUNDER", "founder");
  addDesignerTags("HEAD OF", "head");
  addDesignerTags("WRITER", "writer");
  addDesignerTags("FREELANCE", "freelance");
  addDesignerTags("SYSADMIN", "sysadmin");
  addDesignerTags("DEVELOPER", "developer");
  addDesignerTags("ENGINEER", "engineer");
  if (description.toUpperCase().includes("DIRECTOR") === true) {
    if (description.toUpperCase().includes("ART DIRECTOR") === true) {
    } else if (
      description.toUpperCase().includes("CREATIVE DIRECTOR") === true
    ) {
    } else {
      designerTagsObject["director"] = true;
    }
  }
  if (
    description.toUpperCase().includes("USER EXPERIENCE") ||
    description.includes("UX design") === true ||
    description.includes("UX Design") === true ||
    description.includes("UX") === true ||
    description.includes("ux/") === true ||
    description.includes("UX/") === true ||
    description.includes("ux design") === true
  ) {
    designerTagsObject["ux"] = true;
  }

  if (
    description.toUpperCase().includes("LETTERER") === true ||
    description.toUpperCase().includes("LETTERING") === true
  ) {
    designerTagsObject["letter"] = true;
  }

  if (description.includes("VP") === true) {
    designerTagsObject["vp"] = true;
  }
  if (description.includes("CEO") === true) {
    designerTagsObject["ceo"] = true;
  }

  return designerTagsObject;
};
