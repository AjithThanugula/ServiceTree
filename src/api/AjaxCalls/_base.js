import React from "react";
import Division from "../Division.json";
import Hierarchy from "../HierarchyData.json";
import Organization from "../Organization.json";
import ServiceGroup from "../ServiceGroup.json";
import Offering from "../OfferingData.json";
export function getDivisionData() {
  let data = Division.Division;
  return data;
}

export function getHierarchyData() {
  let data = Hierarchy.value;
  return data;
}

export function getOrganizationData() {
  let data = Organization.Organization;
  return data;
}

export function getServiceGroupData() {
  let data = ServiceGroup.ServiceGroup;
  return data;
}

export function getOfferingsData() {
  let data = Offering.value;
  return data;
}
