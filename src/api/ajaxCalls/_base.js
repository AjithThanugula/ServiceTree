
import Division from "../division.json";
import Hierarchy from "../hierarchyData.json";
import Organization from "../organization.json";
import ServiceGroup from "../serviceGroup.json";
import Offering from "../offeringData.json";
import Subscription from "../subsciption.json"
import ProductSKU from '../productSku.json'
import Features from '../features.json'
import OrganizationMetadata from '../organizationMetadata.json'
import OfferingMetadata from '../offeringMetadata.json'
import ServiceMetadata from '../serviceMetadata.json'

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

export function getProductSKUData() {
  let data = ProductSKU.value;
  return data;
}
export function getFeaturesData() {
  let data = Features.value;
  return data;
}

export function getSubscriptionsData() {
  let data = Subscription.Subscription;
  return data;
}

export function getOrganizationMetadata() {
  let data = OrganizationMetadata.value;
  return data;
}

export function getOfferingMetadata() {
  let data = OfferingMetadata.value;
  return data;
}

export function getServiceMetadata() {
  let data = ServiceMetadata.value;
  return data;
}

