import React from "react";
import Division from "../division.json";
import Hierarchy from "../hierarchyData.json";
import Organization from "../organization.json";
import ServiceGroup from "../serviceGroup.json";
import Offering from "../offeringData.json";
import Subscription from "../subsciption.json"
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

export function getSubscriptionsData() {
  let data = Subscription.Subscription;
  return data;
}

