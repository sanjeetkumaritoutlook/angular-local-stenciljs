//date related non-screen tags
//add template value so that search is easy

//Excess Mid Term London CAS TS
//LONCAS_EXCESS_MID_TERM_LONDON_CAS
export const ddArrayExcessMidterm = [
  { ip: 'form_incept_date', op: 'incept_day' },
  { ip: 'todayDate', op: 'issue_day' },
];

export const sufixDatapathsArrayExcessMidterm = [
  { ip: 'form_incept_date', op: 'incept_ordinal' },
  { ip: 'todayDate', op: 'issue_ordinal' },
];
export const mmyyyyDatapathsArrayExcessMidterm = [
  { ip: 'form_incept_date', op: 'incept_month_year' },
  { ip: 'todayDate', op: 'issue_month_year' },
];

//Zurich Invoice
//EUZU_ZURICH_INVOICE
export const ddArrayZurichInvoice = [
  { ip: 'policy_start_date', op: 'incept_day' },
  { ip: 'policy_end_date', op: 'expiry_day' },
  { ip: 'current_date', op: 'current_day' },
  { ip: 'payment_due_date', op: 'payment_due_date_day' },
];

export const mmZurichInvoiceDatapathsArrayEng = [
  { ip: 'current_date', op: 'current_month_english' },
  { ip: 'policy_start_date', op: 'incept_month_english' },
  { ip: 'policy_end_date', op: 'expiry_month_english' },
];

export const mmZurichInvoiceDatapathsArray = [
  { ip: 'policy_start_date', op: 'incept_month' },
  { ip: 'policy_end_date', op: 'expiry_month' },
  { ip: 'current_date', op: 'issue_month' },
  { ip: 'current_date', op: 'current_month' },
];

export const yyyyZurichInvoiceDatapathsArray = [
  { ip: 'policy_start_date', op: 'incept_year' },
  { ip: 'policy_end_date', op: 'expiry_year' },
  { ip: 'current_date', op: 'current_year' },
  { ip: 'payment_due_date', op: 'payment_due_date_year' },
];

//London CAS Multinational Policy TS
//LONCAS_LONDON_CAS_MULTINATIONAL_POLICY_TS
export const londonMNCddArray = [
  { ip: 'financial_loss_retroactive_date', op: 'retro_active_date_day' },
  { ip: 'loncas_expiry', op: 'renewal_day' },
  { ip: 'loncas_incept', op: 'incept_day' },
  { ip: 'todayDate', op: 'issue_day' },
];

export const londonMNCSufixDatapathsArray = [
  { ip: 'financial_loss_retroactive_date', op: 'retro_active_date_ordinal' },
  { ip: 'loncas_expiry', op: 'renewal_ordinal' },
  { ip: 'loncas_incept', op: 'incept_ordinal' },
  { ip: 'todayDate', op: 'issue_ordinal' },
];
export const londonMNCmmyyyyDatapathsArray = [
  { ip: 'financial_loss_retroactive_date', op: 'retro_active_date_month_year' },
  { ip: 'loncas_expiry', op: 'renewal_month_year' },
  { ip: 'loncas_incept', op: 'incept_month_year' },
  { ip: 'todayDate', op: 'issue_month_year' },
];

//UK Regional PI Primary Policy TS
//EUUKREGSPC_UK_REGIONAL_PI_PRIMARY_POLICY
export const sufixDatapathsArray = [
  { ip: 'incept', op: 'incept_ordinal' },
  { ip: 'proposal_date_3', op: 'proposal_ordinal_3' },
  { ip: 'proposal_date_2', op: 'proposal_ordinal_2' },
  { ip: 'incept', op: 'retroactive_day_ordinal' },
  { ip: 'todayDate', op: 'issue_ordinal' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_genral_eff_date_ordinal',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_ordinal',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_ordinal',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_dat_ordinal',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_ordinal',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_ordinal',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_ordinal',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_ordinal',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_ordinal' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_ordinal',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_ordinal',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_ordinal',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_ordinal',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_ordinal' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_ordinal',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_ordinal' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_ordinal' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_ordinal',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_ordinal',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_ordinal',
  },
  { ip: 'expiry', op: 'renewal_ordinal' },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_ordinal',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_ordinal' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_ordinal',
  },
  { ip: 'proposal_date', op: 'proposal_date_ordinal' },
];

export const mmyyyyDatapathsArray = [
  { ip: 'incept', op: 'incept_month_year' },
  { ip: 'proposal_date', op: 'proposal_month_year' },
  { ip: 'incept', op: 'retroactive_month_year' },
  { ip: 'todayDate', op: 'issue_month_year' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_month_year',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_month_year',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_month_year',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_month_year',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_month_year',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_month_year',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_month_year',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_month_year',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_month_year',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_month_year' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_month_year',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_month_year',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_month_year',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_month_year',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_month_year' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_month_year',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_form_month_year' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_month_year' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_month_year',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_month_year',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_month_year',
  },
  { ip: 'expiry', op: 'renewal_month_year' },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_month_year',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_month_year' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_month_year',
  },
  { ip: 'proposal_date_2', op: 'proposal_month_year_2' },
  {
    ip: 'suspended_funds_prior_to_date',
    op: 'suspended_funds_prior_to_date_month_and_year',
  },
];

export const ddArray = [
  { ip: 'proposal_date', op: 'proposal_date_day' },
  { ip: 'proposal_date_2', op: 'proposal_day_2' },
  { ip: 'proposal_date_3', op: 'proposal_day_3' },
  { ip: 'incept', op: 'retroactive_date_day' },
  { ip: 'todayDate', op: 'issue_day' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_day',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_day',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_liability_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_day',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_day',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_day',
  },
  { ip: 'renewal_clause_effective_date', op: 'renewal_clause_eff_date_day' },
  { ip: 'renewal_clause_effective_date', op: 'renewal_review_eff_date_day' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_eff_date_day',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_day',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_day' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_day',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_day',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_day',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_day',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_day' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_day',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_day' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_day' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_day',
  },
  { ip: 'change_of_name_effective_date', op: 'change_of_name_eff_date_day' },
  { ip: 'controlling_intrest_effective_date', op: 'controlling_eff_date_day' },
  { ip: 'incept', op: 'incept_day' },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactrive_prior_to_date_day',
  },
  { ip: 'expiry', op: 'renewal_day' },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_day',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_day',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_day' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_day',
  },
];

//EUUKREGSPC_UK_REGIONAL_PI_MID_TERM_POLICY
export const ddArrayUKPiMidterm = [
  { ip: 'additional_insured_effective_date', op: 'add_insured_effective_date' },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_day' },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_day',
  },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_day',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_day' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_day' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_day',
  },
  { ip: 'change_of_name_effective_date', op: 'change_of_name_eff_date_day' },
  { ip: 'controlling_intrest_effective_date', op: 'controlling_eff_date_day' },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_day',
  },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_day',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_day',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_liability_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_day',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_day',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_day',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_day',
  },
  { ip: 'renewal_clause_effective_date', op: 'renewal_review_eff_date_day' },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_day' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_eff_date_day',
  },
  { ip: 'incept', op: 'retroactive_prior_to_date_day' },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_day',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_day' },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_day',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_day',
  },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'controlling_interest_effective_date', op: 'controlling_eff_date_day' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_day',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_day',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactrive_prior_to_date_day',
  },
];

export const sufixDatapathsArrayUKMidterm = [
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_ordinal',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_ordinal' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_ordinal',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_ordinal' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_ordinal' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_ordinal',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_ordinal',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_ordinal',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_ordinal',
  },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_genral_eff_date_ordinal',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_ordinal',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_ordinal',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_ordinal',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_ordinal' },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_ordinal',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_ordinal',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_ordinal',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_ordinal',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_ordinal' },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_ordinal',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_ordinal',
  },
  { ip: 'todayDate', op: 'issue_ordinal' },
  {
    ip: 'controlling_interest_effective_date',
    op: 'controlling_eff_date_ordinal',
  },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_ordinal',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_ordinal',
  },
];

export const mmyyyyUKMidtermDatapathsArray = [
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_month_year' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_month_year',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_form_month_year' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_month_year' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_month_year',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_month_year',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_month_year',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_month_year',
  },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_month_year',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_month_year',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_month_year',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_month_year',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_month_year' },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_month_year',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_month_year',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_month_year',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_month_year',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_month_year' },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_month_year',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_month_year',
  },
  { ip: 'todayDate', op: 'issue_month_year' },
  {
    ip: 'controlling_interest_effective_date',
    op: 'controlling_eff_date_month_year',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_month_year',
  },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_month_year',
  },
  {
    ip: 'suspended_funds_prior_to_date',
    op: 'suspended_funds_prior_to_date_month_and_year',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_month_year',
  },
];

//EUDUBPI_DUBLIN_PI_EXCESS
export const sufixDatapathsArrayDuExcess = [
  { ip: 'incept', op: 'incept_ordinal' },
  { ip: 'todayDate', op: 'issue_ordinal' },
  { ip: 'expiry', op: 'renewal_ordinal' },
  {
    ip: 'add_insured_effective_date',
    op: 'add_insured_effective_date_ordinal',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_ordinal' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_ordinal' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_ordinal',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_ordinal' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_ordinal',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_ordinal',
  },
  { ip: 'coinsurance_effective_date', op: 'coinsurance_eff_date_ordinal' },
  {
    ip: 'controlling_interest_effective_date',
    op: 'controlling_eff_date_ordinal',
  },
  {
    ip: 'deducitable_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_ordinal',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_genral_eff_date_ordinal',
  },
  {
    ip: 'limit_of_indemnity_agg_effective_date',
    op: 'limit_of_indemnity_agg_eff_date_ordinal',
  },
  {
    ip: 'limit_of_indemnity_aoc_effective_date',
    op: 'limit_of_indemnity_aoc_eff_date_ordinal',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_ordinal',
  },
  { ip: 'incept', op: 'fire_safety_cladding_eff_date_ordinal' },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_ordinal',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_ordinal',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_ordinal' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_ordinal',
  },
  { ip: 'incept', op: 'retroactive_prior_date_ordinal' },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_ordinal' },
  { ip: 'incept', op: 'runoff_after_date_ordinal' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_ordinal',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_ordinal',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_ordinal',
  },
];

export const mmyyyyDatapathsArrayDuExcess = [
  { ip: 'incept', op: 'incept_month_year' },
  { ip: 'expiry', op: 'renewal_month_year' },
  { ip: 'todayDate', op: 'issue_month_year' },
  {
    ip: 'add_insured_effective_date',
    op: 'add_insured_effective_date_month_year',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_month_year' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_month_year',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_form_month_year' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_month_year' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_month_year',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_month_year',
  },
  { ip: 'coinsurance_effective_date', op: 'coinsurance_eff_date_month_year' },
  {
    ip: 'controlling_interest_effective_date',
    op: 'controlling_eff_date_month_year',
  },
  {
    ip: 'deducitable_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_month_year',
  },
  {
    ip: 'limit_of_indemnity_agg_effective_date',
    op: 'limit_of_indemnity_agg_eff_date_month_year',
  },
  {
    ip: 'limit_of_indemnity_aoc_effective_date',
    op: 'limit_of_indemnity_aoc_eff_date_month_year',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_month_year',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_month_year',
  },
  { ip: 'incept', op: 'fire_safety_cladding_eff_date_month_year' },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_month_year',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_month_year',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_month_year' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_month_year',
  },
  { ip: 'incept', op: 'retroactive_prior_date_month_year' },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_month_year' },
  { ip: 'incept', op: 'runoff_after_date_month_year' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_month_year',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_month_year',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_month_year',
  },
];

export const ddArrayDuExcess = [
  { ip: 'incept', op: 'incept_day' },
  { ip: 'expiry', op: 'renewal_day' },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'add_insured_effective_date', op: 'add_insured_effective_date_day' },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_day' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_day',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_day' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_day' },
  { ip: 'coinsurance_effective_date', op: 'coinsurance_eff_date_day' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_day',
  },
  { ip: 'change_of_name_effective_date', op: 'change_of_name_eff_date_day' },
  { ip: 'controlling_interest_effective_date', op: 'controlling_eff_date_day' },
  {
    ip: 'deducitable_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_day',
  },
  {
    ip: 'limit_of_indemnity_agg_effective_date',
    op: 'limit_of_indemnity_agg_eff_date_day',
  },
  {
    ip: 'limit_of_indemnity_aoc_effective_date',
    op: 'limit_of_indemnity_aoc_eff_date_day',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_day',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_day',
  },
  { ip: 'incept', op: 'fire_safety_cladding_eff_date_day' },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_liability_eff_date_day',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_day',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_day',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  { ip: 'renewal_clause_effective_date', op: 'renewal_review_eff_date_day' },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_day' },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_day' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_eff_date_day',
  },
  { ip: 'incept', op: 'retroactive_prior_to_date_day' },
  { ip: 'incept', op: 'runoff_after_date_day' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_day',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_day',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_day',
  },
];

//EUUKREGSPC_UK_REGIONAL_PI_EXCESS_POLICY
export const ukExcessddArray = [
  { ip: 'incept', op: 'incept_day' },
  { ip: 'expiry', op: 'renewal_day' },
  { ip: 'proposal_date', op: 'proposal_date_day' },
  { ip: 'proposal_date_2', op: 'proposal_day_2' },
  { ip: 'proposal_date_3', op: 'porposal_date_day_3' },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'add_insured_effective_date', op: 'add_insured_effective_date_day' },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_day' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_day',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_day' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_day' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_day',
  },
  { ip: 'change_of_name_effective_date', op: 'change_of_name_eff_date_day' },
  { ip: 'controlling_interest_effective_date', op: 'controlling_eff_date_day' },
  {
    ip: 'deducitable_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_day',
  },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_day',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_day',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_day',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_day',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_day',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_day',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_eff_date_day',
  },
  { ip: 'renewal_clause_effective_date', op: 'renewal_review_eff_date_day' },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_day' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_eff_date_day',
  },
  {
    ip: 'retroactive_cover_exclusion_prior_to_date',
    op: 'retroactrive_prior_to_date_day',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_day',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_day' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_day',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_day',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_liability_eff_date_day',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_day',
  },
];

export const ukExcesSufixDatapathsArray = [
  { ip: 'incept', op: 'incept_ordinal' },
  { ip: 'expiry', op: 'renewal_ordinal' },
  { ip: 'proposal_date', op: 'proposal_date_ordinal' },
  { ip: 'proposal_date_2', op: 'proposal_ordinal_2' },
  { ip: 'proposal_date_3', op: 'proposal_date_ordinal_3' },
  { ip: 'todayDate', op: 'issue_ordinal' },
  {
    ip: 'add_insured_effective_date',
    op: 'add_insured_effective_date_ordinal',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_ordinal' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_ordinal',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_ordinal' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_ordinal' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_ordinal',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_ordinal',
  },
  {
    ip: 'controlling_interest_effective_date',
    op: 'controlling_eff_date_ordinal',
  },
  {
    ip: 'deducitable_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_ordinal',
  },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_genral_eff_date_ordinal',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_ordinal',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_ordinal',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_ordinal',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_eff_date_ordinal',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_ordinal',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_ordinal' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_ordinal',
  },
  {
    ip: 'retroactive_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_ordinal',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_ordinal',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_ordinal' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_ordinal',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_ordinal',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_ordinal',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_ordinal',
  },
];

export const ukExcessmmyyyyDatapathsArray = [
  { ip: 'incept', op: 'incept_month_year' },
  { ip: 'expiry', op: 'renewal_month_year' },
  { ip: 'proposal_date', op: 'proposal_month_year' },
  { ip: 'proposal_date_2', op: 'proposal_month_year_2' },
  { ip: 'proposal_date_3', op: 'proposal_month_year_3' },
  { ip: 'todayDate', op: 'issue_month_year' },
  {
    ip: 'add_insured_effective_date',
    op: 'add_insured_effective_date_month_year',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_month_year' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_month_year',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_month_year' },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_form_month_year' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_month_year' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_month_year',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_month_year',
  },
  {
    ip: 'controlling_interest_effective_date',
    op: 'controlling_eff_date_month_year',
  },
  {
    ip: 'deducitable_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_month_year',
  },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_month_year',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_month_year',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_month_year',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_month_year',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_eff_date_month_year',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_month_year',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_month_year' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_month_year',
  },
  {
    ip: 'retroactive_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_month_year',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_month_year',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_month_year' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_month_year',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_month_year',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_month_year',
  },
  {
    ip: 'suspended_funds_prior_to_date',
    op: 'suspended_funds_prior_to_date_month_and_year',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_month_year',
  },
];

//EUDUBPI_DUBLIN_PI_MIDTERM
export const sufixDatapathsArrayPiMidterm = [
  { ip: 'todayDate', op: 'issue_ordinal' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_genral_eff_date_ordinal',
  },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_ordinal',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_ordinal',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_ordinal',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_ordinal',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_ordinal',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_ordinal',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_ordinal',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_ordinal' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_ordinal',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_ordinal',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_ordinal',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_ordinal',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_ordinal' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_ordinal',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_ordinal' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_ordinal' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_ordinal',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_ordinal',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_ordinal',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_ordinal',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_ordinal' },
];

export const mmyyyyDatapathsArrayPiMidterm = [
  { ip: 'incept', op: 'incept_month_year' },
  { ip: 'proposal_date', op: 'proposal_month_year' },
  { ip: 'incept', op: 'retroactive_month_year' },
  { ip: 'proposal_date_3', op: 'proposal_month_year_3' },
  { ip: 'todayDate', op: 'issue_month_year' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_month_year',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_month_year',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_month_year',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_month_year',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_month_year',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_month_year',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_month_year',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_month_year',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_month_year',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_month_year' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_month_year',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_month_year',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_month_year',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_month_year',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_month_year' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_month_year',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_form_month_year' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_month_year' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_month_year',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_month_year',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_month_year',
  },
  { ip: 'expiry', op: 'renewal_month_year' },
  { ip: 'expiry', op: 'expiry_month_year' },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_month_year',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_month_year' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_month_year',
  },
  { ip: 'proposal_date_2', op: 'proposal_month_year_2' },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_month_year',
  },
];

export const ddArrayPiMidterm = [
  { ip: 'proposal_date', op: 'proposal_date_day' },
  { ip: 'additional_insured_effective_date', op: 'add_insured_effective_date' },
  { ip: 'proposal_date_2', op: 'proposal_day_2' },
  { ip: 'proposal_date_3', op: 'proposal_day_3' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_day',
  },
  { ip: 'todayDate', op: 'issue_day' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_day',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_day',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_liability_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_day',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_day',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_day',
  },
  { ip: 'renewal_clause_effective_date', op: 'renewal_clause_eff_date_day' },
  { ip: 'renewal_clause_effective_date', op: 'renewal_review_eff_date_day' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_eff_date_day',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_day',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_day' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_day',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_day',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_day',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_day',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_day' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_day',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_day' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_day' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_day',
  },
  { ip: 'change_of_name_effective_date', op: 'change_of_name_eff_date_day' },
  { ip: 'controlling_intrest_effective_date', op: 'controlling_eff_date_day' },
  { ip: 'incept', op: 'incept_day' },
  { ip: 'expiry', op: 'expiry_day' },
  { ip: 'expiry', op: 'renewal_day' },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_day',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_day',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_day' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_day',
  },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_day',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_to_date_day',
  },
];

export const sufixDatapathsArrayPiMidterm_setvalue = [
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_ordinal' },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_ordinal',
  },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_genral_eff_date_ordinal',
  },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_ordinal',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_ordinal',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_ordinal',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_ordinal',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_ordinal',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_ordinal',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_ordinal',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_ordinal' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_ordinal',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_ordinal',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_ordinal',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_ordinal',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_ordinal',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_ordinal' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_ordinal',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_ordinal' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_ordinal' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_ordinal',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_ordinal',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_ordinal',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_ordinal',
  },
];

export const mmyyyyDatapathsArrayPiMidterm_setvalue = [
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_month_year',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_month_year',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_month_year',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_month_year',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_month_year',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_month_year',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_month_year',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_month_year',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_month_year',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_month_year' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_month_year',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_month_year',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_month_year',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_month_year',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_month_year',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_month_year' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_month_year',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_form_month_year' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_month_year' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_month_year',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_month_year',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_month_year',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_month_year' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_month_year',
  },
  { ip: 'proposal_date_2', op: 'proposal_month_year_2' },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_month_year',
  },
];

export const ddArrayPiMidterm_setvalue = [
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_day' },
  { ip: 'additional_insured_effective_date', op: 'add_insured_effective_date' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_day',
  },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_day',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_day',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_liability_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_day',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_day',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_day',
  },
  { ip: 'renewal_clause_effective_date', op: 'renewal_clause_eff_date_day' },
  { ip: 'renewal_clause_effective_date', op: 'renewal_review_eff_date_day' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_eff_date_day',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_day',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_day' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_day',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_day',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_day',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_day',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_day' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_day',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_day' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_day' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_day',
  },
  { ip: 'change_of_name_effective_date', op: 'change_of_name_eff_date_day' },
  { ip: 'controlling_intrest_effective_date', op: 'controlling_eff_date_day' },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_day',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_day',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_day',
  },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_day',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_to_date_day',
  },
];

//EUDUBPI_DUBLIN_PI_PRIMARY
export const sufixDatapathsDPrimaryArray = [
  { ip: 'incept', op: 'incept_ordinal' },
  { ip: 'proposal_date_3', op: 'proposal_ordinal_3' },
  { ip: 'incept', op: 'retroactive_day_ordinal' },
  { ip: 'todayDate', op: 'issue_ordinal' },
  { ip: 'manuscript_effective_date', op: 'manuscript eff date ordinal_temp' },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_ordinal',
  },
  { ip: 'coinsurance_effective_date', op: 'coinsurance_eff_date_ordinal' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_genral_eff_date_ordinal',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_ordinal',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_ordinal',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_dat_ordinal',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_ordinal',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_ordinal',
  },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_ordinal',
  },
  {
    ip: 'limit_of_indemnity_agg_effective_date',
    op: 'limit_of_indemnity_agg_eff_date_ordinal',
  },
  {
    ip: 'limit_of_indemnity_aoc_effective_date',
    op: 'limit_of_indemnity_aoc_eff_date_ordinal',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_ordinal',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_ordinal',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_ordinal' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_ordinal',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_ordinal',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_ordinal',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_ordinal',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_prior_date_ordinal',
  },
  {
    ip: 'add_insured_prior_date',
    op: 'amend_period_of_insurance_eff_date_ordinal',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_ordinal' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_ordinal' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_ordinal',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_ordinal',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_ordinal',
  },
  { ip: 'retroactive_date_surveyors', op: 'retroactive_ordinal_surveyors' },
  { ip: 'expiry', op: 'renewal_ordinal' },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_ordinal',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_ordinal' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_ordinal',
  },
  { ip: 'proposal_date', op: 'proposal_date_ordinal' },
];
export const mmyyyyDPrimaryDatapathsArray = [
  { ip: 'incept', op: 'incept_month_year' },
  { ip: 'proposal_date', op: 'proposal_month_year' },
  { ip: 'incept', op: 'retroactive_month_year' },
  { ip: 'proposal_date_3', op: 'proposal_month_year_3' },
  {
    ip: 'manuscript_effective_date',
    op: 'manuscript_eff_date_month_year_temp',
  },
  { ip: 'todayDate', op: 'issue_month_year' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_month_year',
  },
  { ip: 'coinsurance_effective_date', op: 'coinsurance_eff_date_month_year' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_month_year',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_month_year',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_month_year',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_month_year',
  },
  {
    ip: 'limit_of_indemnity_agg_effective_date',
    op: 'limit_of_indemnity_agg_eff_date_month_year',
  },
  {
    ip: 'limit_of_indemnity_aoc_effective_date',
    op: 'limit_of_indemnity_aoc_eff_date_month_year',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_month_year',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_month_year',
  },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_date_month_year',
  },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_date_month_year',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_month_year',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_month_year' },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_month_year',
  },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_month_year',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_month_year',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_month_year',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_month_year',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_prior_date_month_year',
  },
  {
    ip: 'add_insured_prior_date',
    op: 'amend_period_of_insurance_eff_date_month_year',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_form_month_year' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_month_year' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_month_year',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_month_year',
  },
  {
    ip: 'controlling_intrest_effective_date',
    op: 'controlling_eff_date_month_year',
  },
  { ip: 'expiry', op: 'renewal_month_year' },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_month_year',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_month_year' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_month_year',
  },
  { ip: 'proposal_date_2', op: 'proposal_month_year_2' },
  { ip: 'retroactive_date_surveyors', op: 'retroactive_month_year_surveyors' },
];

export const ddDPrimaryArray = [
  { ip: 'proposal_date', op: 'proposal_date_day' },
  { ip: 'proposal_date_2', op: 'proposal_day_2' },
  { ip: 'proposal_date_3', op: 'proposal_day_3' },
  { ip: 'incept', op: 'retroactive_date_day' },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'coinsurance_effective_date', op: 'coinsurance_eff_date_day' },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactive_prior_to_date_day',
  },
  { ip: 'manuscript_effective_date', op: 'manuscript_eff_date_day_temp' },
  {
    ip: 'limit_of_indemnity_effective_date',
    op: 'limit_of_indemnity_eff_date_day',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_day',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_liability_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_day',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_day',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_day',
  },
  { ip: 'renewal_clause_effective_date', op: 'renewal_clause_eff_date_day' },
  { ip: 'renewal_clause_effective_date', op: 'renewal_review_eff_date_day' },
  {
    ip: 'retroactive_cover_exclusion_effective_date',
    op: 'retroactive_eff_date_day',
  },
  {
    ip: 'run_off_liability_error_or_omission_committed_after_date',
    op: 'runoff_after_date_day',
  },
  { ip: 'run_off_liability_effective_date', op: 'runoff_eff_date_day' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_day',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_day',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_day',
  },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_day',
  },
  { ip: 'add_insured_prior_date', op: 'add_insured_prior_date_day' },
  {
    ip: 'amendment_to_period_of_insurance_effective_date',
    op: 'amend_period_of_insurance_eff_date_day',
  },
  { ip: 'period_from', op: 'amend_period_of_insurance_period_from_day' },
  { ip: 'period_to', op: 'amend_period_of_insurance_period_to_day' },
  {
    ip: 'fire_safety_and_cladding_effective_date',
    op: 'fire_safety_cladding_eff_date_day',
  },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_day',
  },
  { ip: 'change_of_name_effective_date', op: 'change_of_name_eff_date_day' },
  { ip: 'controlling_intrest_effective_date', op: 'controlling_eff_date_day' },
  { ip: 'incept', op: 'incept_day' },
  {
    ip: 'retro_active_cover_exclusion_prior_to_date',
    op: 'retroactrive_prior_to_date_day',
  },
  { ip: 'expiry', op: 'renewal_day' },
  {
    ip: 'limit_of_indemnity_agg_effective_date',
    op: 'limit_of_indemnity_agg_eff_date_day',
  },
  {
    ip: 'limit_of_indemnity_aoc_effective_date',
    op: 'limit_of_indemnity_aoc_eff_date_day',
  },
  {
    ip: 'financial_services_extension_clause_effective_date',
    op: 'fsa_extension_clause_eff_date_day',
  },
  {
    ip: 'deductible_to_apply_effective_date',
    op: 'deductible_to_apply_eff_date_day',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  { ip: 'renewal_extension_date', op: 'renewal_extension_date_day' },
  {
    ip: 'employee_fraud_or_dishonesty_effective_date',
    op: 'employee_fraud_or_dishonesty_day',
  },
  { ip: 'retroactive_date_surveyors', op: 'retroactive_date_day_surveyors' },
];

//LONCAS_LONDON_CASUALTY_PRIMARY_POLICY
export const ddArrayLondonCasualtyPrimaryPolicy = [
  { ip: 'policy_start_date', op: 'incept_day' },
  { ip: 'policy_end_date', op: 'expiry_day' },
  { ip: 'renewal_date', op: 'renewal_day' },
  { ip: 'policy_end_date', op: 'end_date_24_month_day' },
  { ip: 'el_data_protection_retro_date', op: 'el_retrodate_day' },
  { ip: 'gl_data_protection_retro_date', op: 'gl_retrodate_day' },
  { ip: 'effective_date_first_policy', op: 'effective_date_first_policy_day' },
  { ip: 'gl_cm_retroactive_date', op: 'policyretrodate_day' },
  { ip: 'endorsement_effective_date', op: 'effective_date_day' },
];

export const mmArrayLondonCasualtyPrimaryPolicy = [
  { ip: 'policy_start_date', op: 'incept_month_year' },
  { ip: 'policy_end_date', op: 'expiry_month_year' },
  { ip: 'renewal_date', op: 'renewal_month_year' },
  { ip: 'policy_end_date', op: 'end_date_24_month_monthyear' },
  { ip: 'el_data_protection_retro_date', op: 'el_retrodate_month_year' },
  { ip: 'gl_data_protection_retro_date', op: 'gl_retrodate_month_year' },
  {
    ip: 'effective_date_first_policy',
    op: 'effective_date_first_policy_monthyear',
  },
  { ip: 'gl_cm_retroactive_date', op: 'policyretrodate_monthyear' },
  { ip: 'endorsement_effective_date', op: 'effective_date_month_year' },
];

export const ordArrayLondonCasualtyPrimaryPolicy = [
  { ip: 'policy_start_date', op: 'incept_ordinal' },
  { ip: 'policy_end_date', op: 'expiry_ordinal' },
  { ip: 'policy_end_date', op: 'renewal_ordinal' },
  { ip: 'policy_start_date', op: 'el_retrodate_ordinal' },
  { ip: 'endorsement_effective_date', op: 'effective_date_ordinal' },
];

//UKIFA_IFA_POLICIES
export const ifa_ddArray = [
  { ip: 'policy_inception_date', op: 'incept_day' },
  { ip: 'policy_expiry_date', op: 'expiry_day' },
  { ip: 'proposal_date', op: 'proposal_day' },
  { ip: 'proposal_date', op: 'proposal_date_day' },
  { ip: 'supplementary_declaration_date', op: 'supplementary_date_day' },
  { ip: 'retroactive_date_selection', op: 'retro_date_day' },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'date_policy_cancelled', op: 'policy_cancelled_day' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_effective_date_day',
  },
  {
    ip: 'period_of_insurance_amended_with_effect_from',
    op: 'period_of_insurance_amended_with_effect_from_day',
  },
  {
    ip: 'date_period_of_insurance_effective_from',
    op: 'date_period_of_insurance_effective_from_day',
  },
  {
    ip: 'date_period_of_insurance_effective_to',
    op: 'date_period_of_insurance_effective_to_day',
  },
  {
    ip: 'date_no_claims_declaration_signed',
    op: 'date_no_claims_declaration_signed_day',
  },
  {
    ip: 'suspended_funds_prior_to_date',
    op: 'suspended_funds_prior_to_date_day',
  },
  {
    ip: 'date_authorised_by_the_guernsey_financial_services_commission',
    op: 'date_authoriesed_by_the_guernsey_financial_services_commission_day',
  },
  { ip: 'date_limit_of_indemnity', op: 'date_limit_of_indemnity_day' },
  { ip: 'date_ncd_signed', op: 'Date_NCD_signed_Day' },
  { ip: 'retroactive_cover_date', op: 'retroactive_cover_date_day' },
  { ip: 'date_of_run_off', op: 'date_of_run_off_day' },
  { ip: 'ucis_prior_to_date', op: 'ucis_prior_to_date_day' },
  {
    ip: 'defined_benefit_or_final_salary_pension_transfers_prior_to_date',
    op: 'defined_benefit_or_final_salary_pension_transfers_prior_to_date_day',
  },
  { ip: 'defined_benefit_questionnaire_date', op: 'db_questionairre_date_day' },
  { ip: 'insurance_brokers_proposal_date', op: 'proposal_date_day_ib' },
  { ip: 'financial_advisers_proposal_date', op: 'proposal_date_day_fa' },
];

export const ifa_mmyyyyDatapathsArray = [
  { ip: 'policy_inception_date', op: 'incept_month_year' },
  { ip: 'policy_expiry_date', op: 'expiry_month_year' },
  { ip: 'proposal_date', op: 'proposal_month_year' },
  { ip: 'supplementary_declaration_date', op: 'supplementary_month_year' },
  { ip: 'retroactive_date_selection', op: 'retro_month_year' },
  { ip: 'todayDate', op: 'issue_month_year' },
  { ip: 'date_policy_cancelled', op: 'policy_cancelled_month_and_year' },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_effective_date_month_and_year',
  },
  {
    ip: 'period_of_insurance_amended_with_effect_from',
    op: 'period_of_insurance_amended_with_effect_from_month_and_year',
  },
  {
    ip: 'date_period_of_insurance_effective_from',
    op: 'date_period_of_insurance_effective_from_month_and_year',
  },
  {
    ip: 'date_period_of_insurance_effective_to',
    op: 'date_period_of_insurance_effective_to_month_and_year',
  },
  {
    ip: 'date_no_claims_declaration_signed',
    op: 'date_no_claims_declaration_signed_month_and_year',
  },
  {
    ip: 'suspended_funds_prior_to_date',
    op: 'suspended_funds_prior_to_date_month_and_year',
  },
  {
    ip: 'date_authorised_by_the_guernsey_financial_services_commission',
    op: 'date_authoriesed_by_the_guernsey_financial_services_commission_month_and_year',
  },
  {
    ip: 'date_limit_of_indemnity',
    op: 'date_limit_of_indemnity_month_and_year',
  },
  { ip: 'date_ncd_signed', op: 'Date_NCD_signed_Month_and_Year' },
  { ip: 'retroactive_cover_date', op: 'retroactive_cover_date_month_and_year' },
  { ip: 'date_of_run_off', op: 'date_of_run_off_month_and_year' },
  { ip: 'ucis_prior_to_date', op: 'ucis_prior_to_date_month_and_year' },
  {
    ip: 'defined_benefit_or_final_salary_pension_transfers_prior_to_date',
    op: 'defined_benefit_or_final_salary_pension_transfers_prior_to_date_month_and_year',
  },
  {
    ip: 'date_authorised_by_the_guernsey_financial_services_commission',
    op: 'date_authorised_by_the_guernsey_financial_services_commission_month_and_year',
  },
  { ip: 'supplementary_declaration_date', op: 'supplementary_date_month_year' },
  {
    ip: 'defined_benefit_questionnaire_date',
    op: 'db_questionairre_date_month_year',
  },
  {
    ip: 'defined_benefit_questionnaire_date',
    op: 'db_questionairre_month_year',
  },
  { ip: 'insurance_brokers_proposal_date', op: 'proposal_month_year_ib' },
  { ip: 'financial_advisers_proposal_date', op: 'proposal_month_year_fa' },
];

//UKIFA_MID_TERM_ENDORSEMENTS_IFA
export const midTermIFA_ddArray = [
  {
    ip: 'date_period_of_insurance_effective_from',
    op: 'date_period_of_insurance_effective_from_day',
  },
  {
    ip: 'date_period_of_insurance_effective_to',
    op: 'date_period_of_insurance_effective_to_day',
  },
  {
    ip: 'date_no_claims_declaration_signed',
    op: 'date_no_claims_declaration_signed_day',
  },
  {
    ip: 'suspended_funds_prior_to_date',
    op: 'suspended_funds_prior_to_date_day',
  },
  {
    ip: 'date_authorised_by_the_guernsey_financial_services_commission',
    op: 'date_authoriesed_by_the_guernsey_financial_services_commission_day',
  },
  { ip: 'date_limit_of_indemnity', op: 'date_limit_of_indemnity_day' },
  { ip: 'date_ncd_signed', op: 'date_ncd_signed_day' },
  { ip: 'retroactive_cover_date', op: 'retroactive_cover_date_day' },
  { ip: 'date_of_run_off', op: 'date_of_run_off_day' },
  { ip: 'ucis_prior_to_date', op: 'ucis_prior_to_date_day' },
  {
    ip: 'defined_benefit_or_final_salary_pension_transfers_prior_to_date',
    op: 'defined_benefit_or_final_salary_pension_transfers_prior_to_date_day',
  },
  { ip: 'defined_benefit_questionnaire_date', op: 'db_questionairre_date_day' },
];

export const midTermIFA_mmyyyyDatapathsArray = [
  {
    ip: 'date_period_of_insurance_effective_from',
    op: 'date_period_of_insurance_effective_from_month_and_year',
  },
  {
    ip: 'date_period_of_insurance_effective_to',
    op: 'date_period_of_insurance_effective_to_month_and_year',
  },
  {
    ip: 'date_no_claims_declaration_signed',
    op: 'date_no_claims_declaration_signed_month_and_year',
  },
  {
    ip: 'suspended_funds_prior_to_date',
    op: 'suspended_funds_prior_to_date_month_and_year',
  },
  {
    ip: 'date_authorised_by_the_guernsey_financial_services_commission',
    op: 'date_authoriesed_by_the_guernsey_financial_services_commission_month_and_year',
  },
  {
    ip: 'date_limit_of_indemnity',
    op: 'date_limit_of_indemnity_month_and_year',
  },
  { ip: 'date_ncd_signed', op: 'date_ncd_signed_month_and_year' },
  { ip: 'retroactive_cover_date', op: 'retroactive_cover_date_month_and_year' },
  { ip: 'date_of_run_off', op: 'date_of_run_off_month_and_year' },
  { ip: 'ucis_prior_to_date', op: 'ucis_prior_to_date_month_and_year' },
  {
    ip: 'defined_benefit_or_final_salary_pension_transfers_prior_to_date',
    op: 'defined_benefit_or_final_salary_pension_transfers_prior_to_date_month_and_year',
  },
  {
    ip: 'date_authorised_by_the_guernsey_financial_services_commission',
    op: 'date_authorised_by_the_guernsey_financial_services_commission_month_and_year',
  },
];

//LONCAS_COMMERCIAL_COMBINED_MID_TERM_POLICY
export const cm_ddArray = [
  { ip: 'incept', op: 'incept_day' },
  { ip: 'expiry', op: 'renewal_day' },
  {
    ip: 'accidental_discovery_of_asbestos_retro_date',
    op: 'accidental_discovery_of_asbestos_retro_date_d',
  },
  { ip: 'asbestos_buyback_retro_date', op: 'asbestos_buyback_retro_date_d' },
  {
    ip: 'failure_of_subcontractors_retro_date',
    op: 'failure_of_subcontractors_retro_date_d',
  },
  {
    ip: 'non_licensed_asbestos_retro_date',
    op: 'non_licensed_asbestos_retro_date_d',
  },
  { ip: 'retro_active_date', op: 'retro_active_date_day' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_day',
  },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'retro_date', op: 'retro_day' },
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_day' },
];

export const cm_sufixDatapathsArray = [
  { ip: 'incept', op: 'incept_ordinal' },
  { ip: 'expiry', op: 'renewal_ordinal' },
  {
    ip: 'accidental_discovery_of_asbestos_retro_date',
    op: 'accidental_discovery_of_asbestos_retro_date_ord',
  },
  { ip: 'asbestos_buyback_retro_date', op: 'asbestos_buyback_retro_date_ord' },
  {
    ip: 'failure_of_subcontractors_retro_date',
    op: 'failure_of_subcontractors_retro_date_ord',
  },
  {
    ip: 'non_licensed_asbestos_retro_date',
    op: 'non_licensed_asbestos_retro_date_ord',
  },
  { ip: 'retro_active_date', op: 'retro_active_date_ordinal' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_ordinal',
  },
  { ip: 'todayDate', op: 'issue_ordinal' },
  { ip: 'retro_date', op: 'retro_ordinal' },
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_ordinal' },
];

export const cm_mmyyyyDatapathsArray = [
  { ip: 'incept', op: 'incept_month_year' },
  { ip: 'expiry', op: 'renewal_month_year' },
  {
    ip: 'accidental_discovery_of_asbestos_retro_date',
    op: 'accidental_discovery_of_asbestos_retro_date_m_yr',
  },
  { ip: 'asbestos_buyback_retro_date', op: 'asbestos_buyback_retro_date_m_yr' },
  {
    ip: 'failure_of_subcontractors_retro_date',
    op: 'failure_of_subcontractors_retro_date_m_yr',
  },
  {
    ip: 'non_licensed_asbestos_retro_date',
    op: 'non_licensed_asbestos_retro_date_m_yr',
  },
  { ip: 'retro_active_date', op: 'retro_active_date_month_year' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_monthyear',
  },
  { ip: 'todayDate', op: 'issue_month_year' },
  { ip: 'retro_date', op: 'retro_month_year' },
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_monthyear' },
];

//EUUKREGSPC_MARSH_DELTA_PI
export const ddMarshPiArray = [
  { ip: 'inception_dd_mm_ccyy', op: 'inception_dd' },
  { ip: 'expiry_dd_mmm_ccyy', op: 'expiry_dd' },
  { ip: 'retroactive_dd_mm_ccyy', op: 'retroactive_dd' },
  { ip: 'issue_date', op: 'issue_dd' },
  { ip: 'renewal_dd_mmm_ccyy', op: 'renewal_dd' },
];

export const mmyyyyMarshPiDatapathsArray = [
  { ip: 'inception_dd_mm_ccyy', op: 'inception_mmm_ccyy' },
  { ip: 'renewal_dd_mmm_ccyy', op: 'renewal_mmm_ccyy' },
  { ip: 'retroactive_dd_mm_ccyy', op: 'retroactive_mmm_ccyy' },
  { ip: 'expiry_dd_mmm_ccyy', op: 'expiry_mmm_ccyy' },
  { ip: 'issue_date', op: 'issue_mmm_ccyy' },
];

//old approach - splititng forms
//LONCAS_COMMERCIAL_COMBINED
export const cmts_ddArray = [
  { ip: 'qinception_date', op: 'incept_day' },
  { ip: 'qexpiry_date', op: 'expiry_day' },
  { ip: 'incept', op: 'pincept_day' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_day',
  },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'retro_date', op: 'retro_day' },
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_day' },
  { ip: 'expiry', op: 'prenewal_day' },
  { ip: 'qquote_validity_date', op: 'quote_day' },
  { ip: 'terr_inc_date', op: 'terror_incept_day' },
  { ip: 'terr_exp_date', op: 'terror_exp_day' },
];

export const cmts_sufixDatapathsArray = [
  { ip: 'qinception_date', op: 'incept_ordinal' },
  { ip: 'qexpiry_date', op: 'expiry_ordinal' },
  { ip: 'incept', op: 'pincept_ordinal' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_ordinal',
  },
  { ip: 'todayDate', op: 'issue_ordinal' },
  { ip: 'retro_date', op: 'retro_ordinal' },
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_ordinal' },
  { ip: 'expiry', op: 'prenewal_ordinal' },
  { ip: 'qquote_validity_date', op: 'quote_ordinal' },
  { ip: 'terr_inc_date', op: 'terror_incept_ordinal' },
  { ip: 'terr_exp_date', op: 'terror_exp_ordinal' },
];

export const cmts_mmyyyyDatapathsArray = [
  { ip: 'qinception_date', op: 'incept_month_year' },
  { ip: 'qexpiry_date', op: 'expiry_month_year' },
  { ip: 'incept', op: 'pincept_month_year' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_monthyear',
  },
  { ip: 'todayDate', op: 'issue_month_year' },
  { ip: 'retro_date', op: 'retro_month_year' },
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_monthyear' },
  { ip: 'expiry', op: 'prenewal_month_year' },
  { ip: 'qquote_validity_date', op: 'quote_month_year' },
  { ip: 'terr_inc_date', op: 'terror_incept_month_year' },
  { ip: 'terr_exp_date', op: 'terror_exp_month_year' },
];

//EUDUBPI_COMMERCIAL_EXCESS_FOLLOW_FORM
export const ddArrayCommercialExcessFollow = [
  { ip: 'incept_date', op: 'incept_day' },
  { ip: 'expiry_date', op: 'expiry_day' },
  { ip: 'retroactive_date', op: 'retrodate_day' },
  {
    ip: 'prior_and_pending_litagation_date',
    op: 'prior_and_pending_litagation_day',
  },
];

//LONCAS_PUNCTUATED_LONDON_CAS_PRIMARY_POLICY

export const ddArrayLondon = [
  { ip: 'incept', op: 'incept_day' },
  { ip: 'expiry', op: 'renewal_day' },
  {
    ip: 'accidental_discovery_of_asbestos_retro_date',
    op: 'accidental_discovery_of_asbestos_retro_date_d',
  },
  { ip: 'asbestos_buyback_retro_date', op: 'asbestos_buyback_retro_date_d' },
  {
    ip: 'failure_of_subcontractors_retro_date',
    op: 'failure_of_subcontractors_retro_date_d',
  },
  {
    ip: 'non_licensed_asbestos_retro_date',
    op: 'non_licensed_asbestos_retro_date_d',
  },
  { ip: 'retro_active_date', op: 'retro_active_date_day' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_day',
  },
  { ip: 'todayDate', op: 'issue_day' },
  // { ip: 'retro_date', op: 'retro_day'},
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_day' },
];

export const sufixDatapathsArrayLondon = [
  { ip: 'incept', op: 'incept_ordinal' },
  { ip: 'expiry', op: 'renewal_ordinal' },
  {
    ip: 'accidental_discovery_of_asbestos_retro_date',
    op: 'accidental_discovery_of_asbestos_retro_date_ord',
  },
  { ip: 'asbestos_buyback_retro_date', op: 'asbestos_buyback_retro_date_ord' },
  {
    ip: 'failure_of_subcontractors_retro_date',
    op: 'failure_of_subcontractors_retro_date_ord',
  },
  {
    ip: 'non_licensed_asbestos_retro_date',
    op: 'non_licensed_asbestos_retro_date_ord',
  },
  { ip: 'retro_active_date', op: 'retro_active_date_ordinal' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_ordinal',
  },
  { ip: 'todayDate', op: 'issue_ordinal' },
  // { ip :'retro_date', op: 'retro_ordinal'},
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_ordinal' },
];

export const mmyyyyLondonDatapathsArray = [
  { ip: 'incept', op: 'incept_month_year' },
  { ip: 'expiry', op: 'renewal_month_year' },
  {
    ip: 'accidental_discovery_of_asbestos_retro_date',
    op: 'accidental_discovery_of_asbestos_retro_date_m_yr',
  },
  { ip: 'asbestos_buyback_retro_date', op: 'asbestos_buyback_retro_date_m_yr' },
  {
    ip: 'failure_of_subcontractors_retro_date',
    op: 'failure_of_subcontractors_retro_date_m_yr',
  },
  {
    ip: 'non_licensed_asbestos_retro_date',
    op: 'non_licensed_asbestos_retro_date_m_yr',
  },
  { ip: 'retro_active_date', op: 'retro_active_date_month_year' },
  {
    ip: 'effective_date_of_first_policy',
    op: 'effective_date_of_first_policy_monthyear',
  },
  { ip: 'todayDate', op: 'issue_month_year' },
  // { ip :'retro_date', op: 'retro_month_year'},
  { ip: 'dp_retroactive_date', op: 'dp_retrodate_monthyear' },
];

//EUSPCDOUK_UK_REGIONAL_FI_PRIMARY_TS
export const ukRegionalFIDayArray = [
  { ip: 'retroactive_date_do', op: 'retro_date_do_day' },
  { ip: 'incept_date', op: 'incept_day' },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'expiry_date', op: 'expiry_day' },
  { ip: 'prior_and_pending_litigation_date', op: 'priorpending_day' },
  { ip: 'retroactive_date_pi', op: 'retro_date_pi_day' },
];

export const ukRegionalFIMonthArray = [
  { ip: 'retroactive_date_do', op: 'retro_date_do_month_year' },
  { ip: 'incept_date', op: 'incept_month_year' },
  { ip: 'todayDate', op: 'issue_month_year' },
  { ip: 'expiry_date', op: 'expiry_month_year' },
  { ip: 'prior_and_pending_litigation_date', op: 'priorpending_month_year' },
  { ip: 'retroactive_date_pi', op: 'retro_date_pi_month_year' },
];

//LONCAS_LONDON_CASUALTY_EXCESS_POLICY

export const ddArrayLondonExcess = [
  { ip: 'incept', op: 'incept_day' },
  { ip: 'expiry', op: 'renewal_day' },
  { ip: 'todayDate', op: 'issue_day' },
  { ip: 'retro_date', op: 'retro_day' },
];

export const sufixDatapathsArrayLondonExcess = [
  { ip: 'incept', op: 'incept_ordinal' },
  { ip: 'expiry', op: 'renewal_ordinal' },
  { ip: 'todayDate', op: 'issue_ordinal' },
  { ip: 'retro_date', op: 'retro_ordinal' },
  { ip: 'endorsement_effective_date', op: 'effective_date_ordinal' },
];

export const mmyyyyLondonExcessDatapathsArray = [
  { ip: 'incept', op: 'incept_month_year' },
  { ip: 'expiry', op: 'renewal_month_year' },
  { ip: 'todayDate', op: 'issue_month_year' },
  { ip: 'retro_date', op: 'retro_month_year' },
  { ip: 'endorsement_effective_date', op: 'effective_date_month_year' },
];

//EUUKREGSPC_UK_REGIONAL_PI_ENDORSEMENT_LIBRARY_TS

export const ddArrayukEndorsementLibrary = [
  { ip: 'issue_date', op: 'issue_day' },
  { ip: 'additional_insured_effective_date', op: 'add_insured_prior_date_day' },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_day',
  },
  { ip: 'change_of_name_effective_date', op: 'change_of_name_eff_date_day' },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_day',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_liability_eff_date_day',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_day',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_day',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_day',
  },
  { ip: 'renewal_clause_effective_date', op: 'renewal_review_eff_date_day' },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_day',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_day',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_day',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_day',
  },
];

export const sufixDatapathsukEndorsementLibrary = [
  { ip: 'issue_date', op: 'issue_ordinal' },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_ordinal',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_ordinal',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_genral_eff_date_ordinal',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_ordinal',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_ordinal',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_ordinal',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_ordinal',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_ordinal',
  },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_ordinal',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_ordinal',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_ordinal',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_ordinal',
  },
];

export const mmyyyyukEndorsementLibraryArray = [
  { ip: 'issue_date', op: 'issue_month_year' },
  {
    ip: 'additional_insured_effective_date',
    op: 'add_insured_effective_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  {
    ip: 'change_of_address_effective_date',
    op: 'change_of_address_eff_date_month_year',
  },
  {
    ip: 'change_of_name_effective_date',
    op: 'change_of_name_eff_date_month_year',
  },
  {
    ip: 'exclusion_clause_effective_date',
    op: 'exclusion_clause_general_eff_date_month_year',
  },
  {
    ip: 'increase_in_deductible_effective_date',
    op: 'increase_in_deductible_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_effective_date',
    op: 'increase_limit_of_indemnity_eff_date_month_year',
  },
  {
    ip: 'increase_limit_of_indemnity_surveyors_effective_date',
    op: 'increase_limit_of_liability_sur_eff_date_month_year',
  },
  {
    ip: 'mitigation_of_loss_extension_effective_date',
    op: 'mitigation_of_loss_extension_eff_date_month_year',
  },
  {
    ip: 'partners_previous_business_extension_effective_date',
    op: 'partners_prebious_bus_ext_eff_date_month_year',
  },
  {
    ip: 'renewal_clause_effective_date',
    op: 'renewal_clause_eff_date_month_year',
  },
  {
    ip: 'self_employed_subcontractors_effective_date',
    op: 'self_employed_eff_date_month_year',
  },
  {
    ip: 'specialist_consultants_extension_effective_date',
    op: 'specialist_eff_date_month_year',
  },
  {
    ip: 'specific_matters_exclusion_effective_date',
    op: 'specific_matters_eff_date_month_year',
  },
  {
    ip: 'inter_group_claims_exclusion_effective_date',
    op: 'intergroup_eff_date_month_year',
  },
];
