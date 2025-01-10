/* union type 합집합 */

let str: "name" | "age" | "address";

// 파이프라인
// str = 'address'

type CompanyA = {
  companyName: string;
  since: number;
};

type CompanyB = {
  ceo: string;
};

type Company = CompanyA & CompanyB;
type _Company = CompanyA | CompanyB;

interface CompanyC extends CompanyA {
  ceo: string;
}

const company1: Company = {
  companyName: "8b-studio",
  since: 2022,
  ceo: "kindTiger",
};

const company2: Company = {
  companyName: "apple",
  since: 2010,
  ceo: "steve",
};

/* intersection type 교집합 */
