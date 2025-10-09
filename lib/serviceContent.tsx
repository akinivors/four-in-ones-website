// In lib/serviceContent.tsx
import React from 'react';

export const contentMap: Record<string, React.ReactNode> = {
  // --- Rhinoplasty Content ---
  "rhinoplasty-what": (
    <div className="space-y-4">
      <p>Rhinoplasty, or surgery to reshape the nose, is one of the most common of all plastic surgery procedures. It can be used to increase or decrease the size of your nose, change the shape of the tip or the bridge, narrow the span of the nostrils, or change the angle between your nose and upper lip. It may also correct a birth defect or injury, or help relieve some breathing problems.</p>
    </div>
  ),
  "rhinoplasty-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Surgical Techniques</h3>
      <p>Our surgeons are proficient in both major rhinoplasty techniques to provide the best possible outcome for your specific anatomy:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Closed Rhinoplasty:</strong> All incisions are made inside the nostrils, leaving no visible external scars. This approach is typically used for patients requiring modifications to the nasal bridge.</li>
        <li><strong>Open Rhinoplasty:</strong> Involves a small incision on the columella (the tissue between the nostrils). This technique allows the surgeon maximum visibility and control, which is ideal for complex procedures involving the nasal tip.</li>
      </ul>
    </div>
  ),
  "rhinoplasty-preparation": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Who is an Ideal Candidate?</h3>
      <p>Good candidates are individuals who are unhappy with the size or shape of their nose, are in good overall health, do not smoke, and have realistic expectations. It is important that facial growth is complete, so patients are typically 18 years or older.</p>
      <h3 className="font-bold text-lg mt-6">Things to Consider Before Surgery</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Avoid medications that can thin the blood, such as aspirin and ibuprofen, for two weeks prior to surgery.</li>
        <li>Arrange for someone to drive you home after the procedure and to assist you for the first couple of days.</li>
        <li>Prepare a comfortable recovery space with pillows to keep your head elevated.</li>
        <li>Stop smoking several weeks before the surgery to ensure proper healing.</li>
      </ul>
    </div>
  ),
  "rhinoplasty-recovery": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">The Recovery Process</h3>
      <p>After the surgery, a splint will be placed on your nose for protection and support, which typically stays on for about a week. You can expect swelling and bruising around the eyes, which will begin to improve after the third day. While most of the significant swelling subsides in a few weeks, the final, refined shape of your nose may take up to a year to fully emerge.</p>
      <h3 className="font-bold text-lg mt-6">Things to Consider After Surgery</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Keep your head elevated, even while sleeping, for the first few days to minimize swelling.</li>
        <li>Avoid strenuous activities, exercise, and heavy lifting for at least 4-6 weeks.</li>
        <li>Do not blow your nose for the first two weeks.</li>
        <li>Avoid wearing glasses that rest on the bridge of your nose until your surgeon gives you clearance.</li>
      </ul>
    </div>
  ),

  // --- Hair Transplant Content ---
  "hair-transplant-what": (
    <div className="space-y-4">
      <p>Hair transplantation is a minimally invasive surgical procedure that moves individual hair follicles from a donor site (typically the back and sides of the head) to a recipient site (the balding or thinning areas). The goal is to restore a natural-looking hairline and add density to areas affected by hair loss.</p>
    </div>
  ),
  "hair-transplant-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">FUE vs. DHI Techniques</h3>
      <p>We specialize in the most advanced methods to ensure minimal scarring and natural results:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>FUE (Follicular Unit Extraction):</strong> Individual hair grafts are harvested from the donor area using a micro-punch tool. The surgeon then creates channels in the recipient area before implanting the grafts.</li>
        <li><strong>DHI (Direct Hair Implantation):</strong> A more advanced form of FUE where a specialized Choi Implanter Pen is used. This tool extracts the graft and implants it directly into the recipient site in one motion, without the need to create channels beforehand. This offers excellent control over the depth, angle, and direction of implantation.</li>
      </ul>
    </div>
  ),
  "hair-transplant-preparation": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Graft Calculation</h3>
      <p>The number of grafts required depends entirely on the extent of your hair loss, the quality of your donor area, and your desired density. During your consultation, our specialists will use the Norwood Scale to classify your stage of hair loss and provide an accurate estimate of the number of grafts needed to achieve your goals.</p>
    </div>
  ),
  "hair-transplant-recovery": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Post-Operative Care</h3>
      <p>Proper aftercare is crucial for success. You will experience some shedding of the newly transplanted hairs in the first 2-3 weeks, which is completely normal. Permanent hair growth begins around 3-4 months later. We provide a special post-operative care kit and detailed instructions, including how to perform the critical first wash to ensure the grafts heal perfectly.</p>
    </div>
  ),

  // --- Obesity Surgery Content ---
  "obesity-surgery-what": (
    <div className="space-y-4">
      <p>Bariatric (obesity) surgery is a life-changing procedure for individuals struggling with severe obesity. It works by restricting the amount of food the stomach can hold, causing malabsorption of nutrients, or by a combination of both. These procedures have proven to be the most effective treatment for severe obesity and related health conditions.</p>
      <p>Our clinic offers several proven techniques including gastric sleeve, gastric bypass, and gastric balloon procedures, each tailored to individual patient needs and medical conditions. These procedures not only promote significant weight loss but also help resolve obesity-related health issues such as diabetes, high blood pressure, and sleep apnea.</p>
    </div>
  ),
  "obesity-surgery-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Available Bariatric Procedures</h3>
      <p>These procedures are typically performed laparoscopically (keyhole surgery), which is minimally invasive. We offer several effective obesity surgery options:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Gastric Sleeve:</strong> Removes 75-80% of the stomach, creating a smaller pouch that limits food intake</li>
        <li><strong>Gastric Bypass:</strong> Creates a small stomach pouch and reroutes the small intestine to reduce absorption</li>
        <li><strong>Gastric Balloon:</strong> Non-surgical option using an inflatable balloon to reduce stomach capacity</li>
      </ul>
      <p>All procedures are performed laparoscopically when possible, resulting in smaller incisions, less pain, and faster recovery compared to traditional open surgery.</p>
    </div>
  ),
  "obesity-surgery-preparation": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Who is an Ideal Candidate?</h3>
      <p>Candidates typically have a BMI of 35 or higher with obesity-related health conditions, or BMI of 40 or higher. Patients must be committed to lifelong lifestyle changes including dietary modifications and regular exercise. Age typically ranges from 18-65 years old.</p>
      <h3 className="font-bold text-lg mt-6">Pre-Surgery Requirements</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Comprehensive medical evaluation and psychological assessment</li>
        <li>Nutritional counseling and education about post-surgery diet</li>
        <li>Pre-operative diet to reduce liver size (typically 2 weeks)</li>
        <li>Stop smoking and limit alcohol consumption</li>
        <li>Clearance from your primary care physician and specialists if needed</li>
      </ul>
    </div>
  ),
  "obesity-surgery-recovery": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Recovery Process</h3>
      <p>Most patients stay 2-3 days in hospital and return to normal activities within 2-4 weeks. Long-term success requires commitment to dietary changes and regular follow-up care. You&apos;ll work closely with our nutritionist and medical team to ensure optimal results.</p>
      <h3 className="font-bold text-lg mt-6">Long-term Care</h3>
      <ul className="list-disc list-inside space-y-2">
        <li>Follow a structured eating plan with small portions and proper nutrition</li>
        <li>Take recommended vitamins and supplements to prevent deficiencies</li>
        <li>Regular exercise as cleared by your medical team</li>
        <li>Attend follow-up appointments and support groups</li>
        <li>Monitor for any complications and maintain lifelong medical care</li>
      </ul>
    </div>
  ),

  // --- Sleeve Gastrectomy Content ---
  "sleeve-gastrectomy-what": (
    <div className="space-y-4">
      <p><strong>Sleeve Gastrectomy</strong>, also known as Gastric Sleeve surgery, is the most frequently performed bariatric surgery worldwide. It is a restrictive procedure that promotes weight loss by permanently reducing the size of the stomach.</p>
      <p>Using a minimally invasive laparoscopic technique, our surgeons remove approximately 80% of the stomach. The remaining portion is formed into a narrow tube or &ldquo;sleeve.&rdquo; This smaller stomach pouch can hold significantly less food, making you feel full much quicker and reducing overall calorie intake. A key benefit of this procedure is the removal of the portion of the stomach that produces Ghrelin, the primary &ldquo;hunger hormone,&rdquo; which significantly reduces appetite.</p>
    </div>
  ),
  "sleeve-gastrectomy-candidates": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Who is a Good Candidate?</h3>
      <p>This procedure is a powerful tool for individuals who are committed to making a lifelong change. You may be an ideal candidate if you meet the following criteria:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>BMI of 40 or higher</strong>, or a BMI of 35 or higher with significant obesity-related health problems (comorbidities).</li>
        <li>Common comorbidities include Type 2 diabetes, hypertension, high cholesterol, and sleep apnea.</li>
        <li>Typically between the ages of 18 and 65.</li>
        <li>Have a history of unsuccessful weight loss attempts through diet and exercise alone.</li>
        <li>Are psychologically prepared for the surgery and the major lifestyle changes that follow.</li>
      </ul>
    </div>
  ),
  "sleeve-gastrectomy-preparation": (
     <div className="space-y-4">
      <p>Thorough preparation is key to a successful outcome. The pre-operative process involves a comprehensive evaluation to ensure you are ready for surgery, both physically and mentally.</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Medical Evaluation:</strong> Includes a full physical exam, blood tests, endoscopy, and ultrasounds to assess your health.</li>
        <li><strong>Nutritional Counseling:</strong> Our dietitians will guide you on a pre-operative diet to shrink your liver and reduce surgical risks.</li>
        <li><strong>Psychological Screening:</strong> A consultation to ensure you understand the procedure and are prepared for the post-operative lifestyle.</li>
        <li><strong>Medication Adjustments:</strong> You may need to stop taking certain medications, like blood thinners, before the surgery.</li>
      </ul>
    </div>
  ),
  "sleeve-gastrectomy-recovery": (
     <div className="space-y-4">
      <h3 className="font-bold text-lg">Post-Op Diet and Nutrition</h3>
      <p>Your recovery begins immediately after surgery with a carefully structured diet to allow your new stomach to heal. You will progress through several stages over a number of weeks:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Stage 1 (First Week):</strong> Clear liquids only.</li>
        <li><strong>Stage 2 (Weeks 2-4):</strong> Pureed foods and protein shakes.</li>
        <li><strong>Stage 3 (Weeks 5-6):</strong> Soft, moist foods.</li>
        <li><strong>Stage 4 (Beyond Week 6):</strong> Gradual reintroduction of solid foods, focusing on protein first.</li>
      </ul>
      <p><strong>Lifelong supplementation</strong> with vitamins and minerals (such as B12, iron, and calcium) is mandatory to prevent nutritional deficiencies.</p>
    </div>
  ),

  // --- Gastric Bypass Content ---
  "gastric-bypass-what": (
    <div className="space-y-4">
      <p><strong>Gastric Bypass</strong>, often considered the &ldquo;gold standard&rdquo; of weight loss surgery, is a procedure that works through both restriction and malabsorption. It involves creating a small stomach pouch and rerouting the digestive system.</p>
      <p>This dual-mechanism approach is highly effective for significant, long-term weight loss and is particularly successful in resolving obesity-related health conditions, most notably type 2 diabetes.</p>
    </div>
  ),
  "gastric-bypass-procedure": (
    <div className="space-y-4">
      <p>Performed laparoscopically, the surgeon first creates a small stomach pouch (about the size of an egg) by separating it from the rest of the stomach. Next, the small intestine is divided and re-routed to connect directly to this new, smaller pouch. Food now bypasses most of the stomach and the upper part of the small intestine, reducing calorie and nutrient absorption.</p>
    </div>
  ),
  "gastric-bypass-preparation": (
    <div className="space-y-4">
      <p>Candidates for Gastric Bypass are similar to those for Sleeve Gastrectomy (BMI of 40+, or 35+ with comorbidities). This procedure is often recommended for patients with severe acid reflux or type 2 diabetes due to its high resolution rate for these conditions. A rigorous pre-operative evaluation and commitment to lifelong dietary changes are required.</p>
    </div>
  ),
  "gastric-bypass-recovery": (
    <div className="space-y-4">
      <p>Recovery is similar to the gastric sleeve, with a hospital stay of 2-3 days and a gradual progression of diet from liquids to solids. Due to the malabsorptive component of the surgery, lifelong adherence to a strict vitamin and mineral supplement regimen is absolutely critical to prevent severe nutritional deficiencies.</p>
    </div>
  ),

  // --- Gastric Balloon Content ---
  "gastric-balloon-what": (
     <div className="space-y-4">
      <p>The <strong>Gastric Balloon</strong> is a non-surgical, temporary weight loss solution. It is designed for individuals who need assistance kickstarting their weight loss journey and learning portion control without undergoing permanent surgery.</p>
    </div>
  ),
  "gastric-balloon-procedure": (
    <div className="space-y-4">
      <p>The procedure is simple and quick, often taking only 20-30 minutes under light sedation. A soft, deflated silicone balloon is inserted into the stomach via an endoscope through your mouth. Once in place, it is filled with a sterile saline solution. The filled balloon takes up space in the stomach, limiting food capacity and creating a feeling of fullness.</p>
    </div>
  ),
  "gastric-balloon-candidates": (
     <div className="space-y-4">
      <p>This option is ideal for individuals with a BMI between 30 and 40 who are looking for a less invasive option. It is a powerful tool for those who are committed to a supervised diet and behavior modification program to maintain weight loss after the balloon is removed.</p>
    </div>
  ),
  "gastric-balloon-removal": (
     <div className="space-y-4">
      <p>The balloon remains in the stomach for a period of 6 to 12 months. After this time, it is removed in a similar endoscopic procedure. The period with the balloon is a critical training phase, helping you adapt to healthier eating habits and smaller portion sizes for long-term success.</p>
    </div>
  ),

  // --- Gastric Botox Content ---
  "gastric-botox-what": (
    <div className="space-y-4">
      <p><strong>Gastric Botox</strong> is one of the newest and least invasive methods for weight management. It is a non-surgical procedure designed for individuals seeking modest weight loss without the commitment or recovery time of surgery.</p>
    </div>
  ),
  "gastric-botox-procedure": (
     <div className="space-y-4">
      <p>The procedure is performed endoscopically in about 20 minutes. Using a gastroscope, Botulinum toxin (Botox) is injected into specific areas of the stomach muscle wall. This relaxes the stomach muscles and slows down gastric emptying, meaning food stays in the stomach for longer. This prolonged feeling of fullness helps to reduce overall food intake.</p>
    </div>
  ),
  "gastric-botox-candidates": (
     <div className="space-y-4">
      <p>Ideal candidates are those who are slightly overweight (BMI between 27-35) and have been unsuccessful with diet and exercise alone. It is not a solution for severe obesity but can be an effective tool for breaking through weight loss plateaus or for individuals who do not qualify for bariatric surgery.</p>
    </div>
  ),
  "gastric-botox-recovery": (
    <div className="space-y-4">
      <p>There is virtually no recovery time. It is an outpatient procedure, and most patients can return to their normal daily activities the same day. The effects of the Botox last for approximately 6 months, after which the procedure can be repeated if desired. Success is highly dependent on adhering to a healthy diet and exercise plan during this period.</p>
    </div>
  ),

  // --- Breast Augmentation Content ---
  "breast-augmentation-what": (
    <div className="space-y-4">
      <p><strong>Breast Augmentation</strong>, also known as augmentation mammoplasty, is a surgical procedure to increase breast size and enhance breast shape. It involves placing breast implants under breast tissue or chest muscles.</p>
      <p>For many women, breast augmentation is a way to feel more confident and enhance their body contour. It can also be used to restore breast volume lost after weight reduction or pregnancy, or to achieve a more rounded breast shape.</p>
    </div>
  ),
  "breast-augmentation-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Implant & Incision Options</h3>
      <p>Our surgeons will help you choose the best implant type (silicone or saline) and placement for your body type and desired outcome. Incisions are made in inconspicuous areas to minimize visible scarring and can be placed in one of three locations:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Inframammary:</strong> In the crease under the breast.</li>
        <li><strong>Periareolar:</strong> Along the edge of the areola.</li>
        <li><strong>Transaxillary:</strong> In the armpit.</li>
      </ul>
    </div>
  ),
  "breast-augmentation-candidates": (
    <div className="space-y-4">
      <p>You may be a good candidate for breast augmentation if you are physically healthy, have realistic expectations, and feel that your breasts are too small or asymmetrical. It is also important that your breasts are fully developed. This procedure is a highly personal decision and should be done for yourself, not to fulfill someone else&apos;s desires.</p>
    </div>
  ),
  "breast-augmentation-recovery": (
    <div className="space-y-4">
      <p>Recovery time varies, but most patients can return to work and light activities within a week. Soreness and swelling are common for a few weeks. You will be required to wear a supportive surgical bra during the initial healing period. Strenuous exercise and heavy lifting should be avoided for at least four to six weeks. The final results will settle into place over the course of several months as the tissues heal and adjust.</p>
    </div>
  ),

  // --- Breast Lift Content ---
  "breast-lift-what": (
    <div className="space-y-4">
      <p>A <strong>Breast Lift</strong>, medically known as Mastopexy, is a surgical procedure to raise and reshape sagging or ptotic breasts. Over time, factors such as pregnancy, nursing, weight fluctuations, aging, and gravity can cause breasts to lose their youthful shape and firmness.</p>
      <p>This procedure removes excess skin and tightens the surrounding tissue to reshape and support the new breast contour, resulting in a perkier, more youthful appearance. The nipple and areola are also repositioned to a higher, more natural location.</p>
    </div>
  ),
  "breast-lift-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Incision Techniques</h3>
      <p>The specific technique used depends on the degree of sagging and the patient&apos;s desired outcome. Our surgeons are experts in all modern incision patterns to minimize scarring:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Anchor Incision:</strong> Used for significant sagging, it runs around the areola, vertically down to the breast crease, and horizontally along the crease.</li>
        <li><strong>Lollipop (Vertical) Incision:</strong> Runs around the areola and vertically down to the breast crease. Ideal for moderate sagging.</li>
        <li><strong>Donut (Periareolar) Incision:</strong> A circular incision made only around the edge of the areola, suitable for mild sagging.</li>
      </ul>
    </div>
  ),
  "breast-lift-candidates": (
    <div className="space-y-4">
      <p>You may be a good candidate for a breast lift if you are physically healthy, maintain a stable weight, and have realistic expectations. This procedure is ideal for women who are bothered by the feeling that their breasts have sagged, lost shape and volume, or have nipples that point downward.</p>
    </div>
  ),
  "breast-lift-recovery": (
    <div className="space-y-4">
      <p>After surgery, you will be fitted with a special surgical bra to provide support and minimize swelling. Most patients can return to non-strenuous work within one week. Swelling and bruising will diminish over a few weeks. Strenuous exercise, especially involving the upper body, should be avoided for at least 4-6 weeks. While results are immediately visible, the final shape and position of the breasts will continue to refine over several months.</p>
    </div>
  ),

  // --- Tummy Tuck Content ---
  "tummy-tuck-what": (
    <div className="space-y-4">
      <p>A <strong>Tummy Tuck</strong>, or Abdominoplasty, is a cosmetic surgical procedure designed to create a firmer and flatter abdominal profile. It is ideal for individuals who are bothered by loose, excess skin and fat in the abdominal area that does not respond to diet and exercise.</p>
      <p>This procedure is particularly effective for women after pregnancy or for individuals who have experienced significant weight loss, as it not only removes excess skin but also tightens the weakened or separated abdominal muscles (diastasis recti).</p>
    </div>
  ),
  "tummy-tuck-procedure": (
    <div className="space-y-4">
      <p>Performed under general anesthesia, a full tummy tuck involves a horizontal incision made low on the abdomen, typically from hip to hip. The surgeon then repairs the underlying abdominal muscles by pulling them together and stitching them into place. The skin is then pulled down, the excess is removed, and a new opening is created for the navel. The incisions are then closed, resulting in a tighter, flatter abdomen.</p>
    </div>
  ),
  "tummy-tuck-candidates": (
    <div className="space-y-4">
      <p>Good candidates for a tummy tuck are non-smokers, are in good physical health, and have a stable weight. It&apos;s important to understand that a tummy tuck is a body contouring procedure, not a weight-loss method. It&apos;s best for individuals who are at or near their ideal body weight but struggle with loose skin and a protruding abdomen.</p>
    </div>
  ),
  "tummy-tuck-recovery": (
    <div className="space-y-4">
      <p>Recovery from a tummy tuck is significant. You will have surgical drains in place for several days and will be required to wear a compression garment for several weeks to support the healing tissues and reduce swelling. Most patients need to take 1-2 weeks off from work. Strenuous activities and heavy lifting must be avoided for at least 6-8 weeks. While you will see a noticeable improvement immediately, the final, refined results can take 6-12 months to fully appear as swelling completely subsides.</p>
    </div>
  ),

  // --- Risks & Safety Content ---
  "risks-general-surgery": (
    <div className="space-y-4">
      <p>All surgical procedures carry inherent risks. Our commitment is to minimize these risks through meticulous planning and care. General risks include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Adverse reaction to anesthesia</li>
        <li>Bleeding (hematoma)</li>
        <li>Infection at the incision site</li>
        <li>Poor wound healing and scarring</li>
        <li>Blood clots (Deep Vein Thrombosis)</li>
        <li>Fluid accumulation (seroma)</li>
        <li>Numbness or changes in skin sensation</li>
      </ul>
    </div>
  ),
  "rhinoplasty-risks": (
    <div className="space-y-4">
      <p>In addition to the general risks of surgery, specific risks for rhinoplasty include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Difficulty breathing through the nose</li>
        <li>Unsatisfactory aesthetic result or nasal asymmetry</li>
        <li>A perforated nasal septum (a rare hole in the wall between nostrils)</li>
        <li>Possibility of revision surgery</li>
      </ul>
    </div>
  ),
  "breast-surgery-risks": (
    <div className="space-y-4">
      <p>Specific risks for breast procedures (augmentation, lift) include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Changes in nipple or breast sensation</li>
        <li>Asymmetry in breast position or shape</li>
        <li>(For implants) Capsular contracture, implant leakage or rupture</li>
        <li>Difficulty with breastfeeding in the future</li>
      </ul>
    </div>
  ),
  "tummy-tuck-risks": (
    <div className="space-y-4">
      <p>Specific risks for abdominoplasty include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Poor quality scarring, including keloid scars</li>
        <li>Persistent swelling in the legs</li>
        <li>Damage to underlying structures like nerves or muscles</li>
        <li>Potential for skin loss or tissue necrosis</li>
      </ul>
    </div>
  ),
  "bariatric-surgery-risks": (
    <div className="space-y-4">
      <p>Specific risks for bariatric procedures (sleeve, bypass) include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Staple line leaks from the stomach or intestine</li>
        <li>Nutritional deficiencies requiring lifelong supplementation</li>
        <li>Gallstones due to rapid weight loss</li>
        <li>Bowel obstruction</li>
        <li>(For Bypass) Dumping syndrome</li>
      </ul>
    </div>
  ),

  // --- BBL (Brazilian Butt Lift) Content ---
  "bbl-what": (
    <div className="space-y-4">
      <p>The Brazilian Butt Lift (BBL) is a fat transfer procedure that enhances the size and shape of the buttocks without implants. Excess fat is removed from areas like the abdomen, hips, lower back, or thighs via liposuction, then purified and strategically injected into the buttocks to create a fuller, more rounded shape.</p>
      <p>This procedure not only enhances the buttocks but also sculpts the donor areas, creating an overall more contoured and proportionate silhouette. It has become one of the most popular cosmetic procedures worldwide for achieving a curvier, more youthful figure.</p>
    </div>
  ),
  "bbl-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">The Surgical Process</h3>
      <p>A BBL is performed under general anesthesia and typically takes 3-5 hours. The procedure consists of three main stages:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Liposuction:</strong> Fat is harvested from donor areas using gentle liposuction techniques to preserve the viability of fat cells.</li>
        <li><strong>Purification:</strong> The extracted fat is processed and purified to separate healthy fat cells from oils and fluids.</li>
        <li><strong>Fat Transfer:</strong> The purified fat is carefully injected into multiple layers of the buttocks at various depths and angles to create a natural, smooth contour. Only subcutaneous injections are performed—never into the muscle—to minimize serious risks.</li>
      </ul>
      <p className="mt-4"><strong>Important Safety Note:</strong> The injections must be performed exclusively into the fatty tissue layer beneath the skin. Intramuscular injection carries a high risk of fat embolism, which can be life-threatening.</p>
    </div>
  ),
  "bbl-candidates": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Who is an Ideal Candidate?</h3>
      <p>Good candidates for a BBL are individuals who:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Desire a fuller, more shapely buttocks and improved body proportions</li>
        <li>Have sufficient fat stores in donor areas (abdomen, flanks, thighs, back) for harvesting</li>
        <li>Are at or near a stable, healthy weight (not significantly overweight or underweight)</li>
        <li>Do not smoke or are willing to quit several weeks before and after surgery</li>
        <li>Are in good overall health with no serious medical conditions</li>
        <li>Have realistic expectations and understand the recovery process</li>
      </ul>
      <p className="mt-4"><strong>Note:</strong> Very lean patients with minimal body fat may not be suitable candidates, as there may not be enough fat available for a successful transfer.</p>
    </div>
  ),
  "bbl-recovery": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">What to Expect After Surgery</h3>
      <p>Recovery from a BBL requires patience and strict adherence to post-operative instructions to protect the transferred fat cells:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>No Direct Sitting:</strong> For the first 2-3 weeks, you must avoid sitting or lying directly on your buttocks. Use a special BBL pillow when sitting is unavoidable.</li>
        <li><strong>Compression Garment:</strong> Wear a compression garment on the liposuction areas to reduce swelling and support proper healing.</li>
        <li><strong>Sleep Position:</strong> Sleep on your stomach or side for several weeks to avoid pressure on the buttocks.</li>
        <li><strong>Activity Restrictions:</strong> Avoid strenuous activities and exercise for 6-8 weeks. Light walking is encouraged to promote circulation.</li>
        <li><strong>Swelling & Results:</strong> Significant swelling is normal. Initial results are visible immediately, but final contours emerge after 3-6 months as swelling subsides and fat settles.</li>
      </ul>
      <p className="mt-4"><strong>Fat Survival:</strong> Approximately 60-80% of the transferred fat will survive permanently. The body naturally absorbs some fat during the first few months, which is why slight overcorrection is often performed.</p>
    </div>
  ),

  // --- Vaser Liposuction Content ---
  "vaser-lipo-what": (
    <div className="space-y-4">
      <p>Vaser Liposuction is an advanced body contouring procedure that uses ultrasound energy to selectively break down and remove unwanted fat deposits. VASER stands for &ldquo;Vibration Amplification of Sound Energy at Resonance,&rdquo; and it represents a significant advancement over traditional liposuction techniques.</p>
      <p>Unlike conventional liposuction that uses purely mechanical force, Vaser technology uses ultrasonic waves to gently emulsify fat cells while preserving surrounding tissues like nerves, blood vessels, and connective tissue. This allows for smoother results, less trauma, and the ability to achieve high-definition muscle sculpting.</p>
      <p>Vaser Lipo is ideal for treating stubborn fat areas that are resistant to diet and exercise, including the abdomen, flanks (love handles), thighs, arms, back, chest, and chin.</p>
    </div>
  ),
  "vaser-lipo-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">The Vaser Liposuction Process</h3>
      <p>The procedure is performed under general anesthesia or local anesthesia with sedation, depending on the extent of treatment. The process involves several key steps:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Tumescent Solution Injection:</strong> A saline solution mixed with anesthetic and adrenaline is infused into the target area to numb the region, constrict blood vessels (minimizing blood loss), and cause the fat cells to swell for easier removal.</li>
        <li><strong>Ultrasound Energy Application:</strong> A small probe emitting ultrasonic waves is inserted through tiny incisions. The ultrasound selectively targets and liquefies fat cells while leaving other tissues largely intact.</li>
        <li><strong>Fat Aspiration:</strong> The emulsified fat is gently suctioned out through a thin cannula, allowing the surgeon to sculpt the area with precision.</li>
        <li><strong>Skin Retraction:</strong> Because Vaser preserves the surrounding connective tissue, skin often retracts more smoothly after the procedure, reducing the risk of sagging or irregularities.</li>
      </ul>
      <p className="mt-4">The procedure can take anywhere from 1 to 4 hours depending on the number of areas treated.</p>
    </div>
  ),
  "vaser-lipo-candidates": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Who is an Ideal Candidate?</h3>
      <p>Vaser Liposuction is best suited for individuals who:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Are at or near their ideal body weight but have localized fat deposits that won&apos;t respond to diet or exercise</li>
        <li>Have good skin elasticity for optimal retraction after fat removal</li>
        <li>Are in good overall health with no serious medical conditions</li>
        <li>Do not smoke or are willing to quit before and after the procedure</li>
        <li>Have realistic expectations about the results</li>
        <li>Want body contouring or high-definition sculpting, not significant weight loss</li>
      </ul>
      <p className="mt-4"><strong>Important Note:</strong> Vaser Lipo is not a weight-loss solution or a substitute for a healthy lifestyle. It is a body contouring and sculpting tool designed to refine your shape.</p>
    </div>
  ),
  "vaser-lipo-recovery": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Recovery Timeline & Expectations</h3>
      <p>Recovery from Vaser Liposuction is generally faster and more comfortable than traditional liposuction:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Immediate Post-Op:</strong> Some swelling, bruising, and mild discomfort are normal. Pain is usually manageable with prescribed medication.</li>
        <li><strong>Compression Garment:</strong> You will need to wear a compression garment for 4-6 weeks to reduce swelling, support healing, and help skin retract smoothly.</li>
        <li><strong>Activity Restrictions:</strong> Light walking is encouraged immediately. Return to desk work is typically possible within 3-5 days. Avoid strenuous exercise for 4-6 weeks.</li>
        <li><strong>Swelling:</strong> Most swelling subsides within 4-6 weeks, but minor residual swelling can persist for several months.</li>
        <li><strong>Final Results:</strong> You will notice improvements immediately, but final, refined results are usually visible after 3-6 months once all swelling has resolved and tissues have settled.</li>
      </ul>
      <p className="mt-4"><strong>Maintaining Results:</strong> The fat cells removed are gone permanently. However, maintaining your results requires a stable weight and healthy lifestyle, as remaining fat cells can still expand if you gain weight.</p>
    </div>
  ),

  // --- Mummy Makeover Content ---
  "mummy-makeover-what": (
    <div className="space-y-4">
      <p>A Mummy Makeover is a comprehensive, customized combination of cosmetic procedures designed to help women restore their pre-pregnancy body. Pregnancy, childbirth, and breastfeeding can cause significant changes to a woman&apos;s body, including stretched abdominal skin, separated abdominal muscles (diastasis recti), deflated or sagging breasts, and stubborn fat deposits.</p>
      <p>Rather than addressing these concerns through multiple separate surgeries over time, a Mummy Makeover combines the necessary procedures into a single surgical session. This approach is more cost-effective, requires only one recovery period, and delivers comprehensive, harmonious results.</p>
      <p>Each Mummy Makeover is uniquely tailored to the individual patient&apos;s needs and aesthetic goals, ensuring a personalized transformation.</p>
    </div>
  ),
  "mummy-makeover-procedures": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Common Procedures Included</h3>
      <p>While every Mummy Makeover is customized, the most commonly combined procedures include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Tummy Tuck (Abdominoplasty):</strong> Removes excess, loose abdominal skin and tightens separated or weakened abdominal muscles (diastasis recti) to create a flatter, firmer stomach.</li>
        <li><strong>Breast Lift (Mastopexy):</strong> Raises and reshapes sagging breasts, repositioning the nipples to a more youthful location for a perkier appearance.</li>
        <li><strong>Breast Augmentation:</strong> Restores lost breast volume using implants (silicone or saline) to create fuller, more shapely breasts. Often combined with a breast lift for optimal results.</li>
        <li><strong>Liposuction (or Vaser Lipo):</strong> Removes stubborn fat deposits from areas like the abdomen, flanks, hips, thighs, or arms that don&apos;t respond to diet and exercise.</li>
      </ul>
      <p className="mt-4">Additional procedures such as labiaplasty, arm lifts, or thigh lifts can also be incorporated depending on the patient&apos;s individual concerns.</p>
    </div>
  ),
  "mummy-makeover-candidates": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Who is an Ideal Candidate?</h3>
      <p>Good candidates for a Mummy Makeover are women who:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Have completed their family and do not plan to have more children (future pregnancies can compromise results)</li>
        <li>Are at or near a stable, healthy weight that they can maintain</li>
        <li>Have finished breastfeeding for at least 6 months (ideally 6-12 months postpartum)</li>
        <li>Are in good overall health with no serious medical conditions</li>
        <li>Do not smoke or are willing to quit several weeks before and after surgery</li>
        <li>Have realistic expectations and understand the recovery process</li>
      </ul>
      <p className="mt-4"><strong>Important:</strong> It is crucial to be finished having children before undergoing a Mummy Makeover, as a subsequent pregnancy will re-stretch the skin and abdominal muscles, potentially undoing the surgical results.</p>
    </div>
  ),
  "mummy-makeover-recovery": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Recovery Process & Timeline</h3>
      <p>Because a Mummy Makeover involves multiple procedures, the recovery period is more extensive than a single surgery. However, combining procedures means only one recovery period rather than multiple.</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Hospital Stay:</strong> You may need to stay in the hospital for 1-2 nights for monitoring, depending on the extent of surgery.</li>
        <li><strong>Initial Recovery (1-2 Weeks):</strong> Significant swelling, bruising, and discomfort are normal. Pain is managed with prescribed medication. You will need assistance with daily activities and childcare.</li>
        <li><strong>Compression Garments & Drains:</strong> Compression garments must be worn on treated areas for 4-6 weeks. Surgical drains may be placed temporarily to prevent fluid accumulation.</li>
        <li><strong>Activity Restrictions:</strong> Light walking is encouraged immediately. Return to desk work is typically possible after 2-3 weeks. Avoid strenuous exercise, heavy lifting, and childcare duties for 4-6 weeks.</li>
        <li><strong>No Sitting (if BBL included):</strong> If a Brazilian Butt Lift is part of your makeover, you must avoid sitting directly for 2-3 weeks and use a BBL pillow.</li>
        <li><strong>Final Results:</strong> Swelling gradually subsides over 3-6 months. Final, refined results are typically visible after 6-12 months.</li>
      </ul>
      <p className="mt-4"><strong>Support System:</strong> Having a strong support system at home is essential, especially if you have young children. You will need help with childcare, household tasks, and personal care during the early recovery period.</p>
    </div>
  ),

  // --- FACELIFT CONTENT ---
  "facelift-what": (
    <div className="space-y-4">
      <p>A <strong>Facelift</strong>, or rhytidectomy, is a comprehensive surgical procedure designed to give a more youthful appearance to the face. It addresses the visible signs of aging by tightening underlying muscles, re-draping the skin of the face and neck, and removing excess skin. The procedure is tailored to each patient&apos;s unique facial structure and goals.</p>
    </div>
  ),
  "facelift-procedure": (
    <div className="space-y-4">
      <p>Incisions are carefully placed in the hairline at the temples, continuing down and around the front of the ear, and ending in the lower scalp. The surgeon lifts the skin and repositions and tightens the underlying muscle and connective tissue (the SMAS layer). Excess skin is removed, and the remaining skin is gently re-draped over the uplifted contours. This modern technique ensures a natural, refreshed look rather than an overly tight or &apos;pulled&apos; appearance.</p>
    </div>
  ),
  "facelift-candidates": (
     <div className="space-y-4">
      <p>Ideal candidates are healthy, non-smoking individuals who are bothered by signs of facial aging such as sagging in the midface, deep creases below the lower eyelids and along the nose, the development of jowls, and loose skin and excess fat in the neck. Patients should have realistic expectations and a positive outlook.</p>
    </div>
  ),
  "facelift-recovery": (
     <div className="space-y-4">
      <p>Recovery involves significant swelling and bruising, which peaks in the first few days and gradually subsides over 2-3 weeks. A compression garment may be worn to minimize swelling. Most patients feel comfortable returning to social activities within 2-3 weeks. Strenuous exercise should be avoided for at least 4-6 weeks. The final results will become fully apparent as all residual swelling disappears over several months.</p>
    </div>
  ),
  "facelift-risks": (
    <div className="space-y-4">
      <p>Specific risks for facelift surgery include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Hematoma (collection of blood under the skin)</li>
        <li>Temporary or permanent facial nerve injury</li>
        <li>Hair loss at incision sites</li>
        <li>Unfavorable scarring around the ears</li>
        <li>Skin irregularities or asymmetry</li>
      </ul>
    </div>
  ),

  // --- GYNECOMASTIA CONTENT ---
  "gynecomastia-what": (
    <div className="space-y-4">
      <p><strong>Gynecomastia</strong> is a condition characterized by the overdevelopment of breast tissue in men, resulting in an enlarged or feminine-looking chest. It can be caused by hormonal imbalances, genetics, or the use of certain medications. Male breast reduction surgery is the most effective solution to correct this condition.</p>
    </div>
  ),
  "gynecomastia-procedure": (
    <div className="space-y-4">
      <p>The surgical technique depends on the composition of the excess tissue. If gynecomastia is primarily the result of excess fatty tissue, <strong>liposuction</strong> alone may be used. If excess glandular breast tissue is the cause, an <strong>excision technique</strong> is required, where the tissue is surgically removed through an incision typically made around the areola. Often, a combination of both techniques is used for optimal contouring.</p>
    </div>
  ),
  "gynecomastia-candidates": (
     <div className="space-y-4">
      <p>The best candidates for gynecomastia surgery are healthy men with a stable weight who are bothered by the appearance of their chest. The condition should be stable and not a result of temporary hormonal changes (such as during puberty) or medications that can be discontinued. It is important to have good skin elasticity for the best results.</p>
    </div>
  ),
  "gynecomastia-recovery": (
     <div className="space-y-4">
      <p>Following the procedure, a compression vest must be worn for several weeks to support the chest and reduce swelling. Most patients can return to work and light activities within a week. Swelling and bruising are common and will gradually fade. Strenuous activities and heavy lifting should be avoided for about a month. The final, improved chest contour will be visible once the swelling has fully subsided.</p>
    </div>
  ),
  "gynecomastia-risks": (
    <div className="space-y-4">
      <p>Specific risks for gynecomastia surgery include:</p>
      <ul className="list-disc list-inside space-y-2">
        <li>Asymmetry in chest or nipple positioning</li>
        <li>Changes in nipple sensation</li>
        <li>Contour irregularities or depressions</li>
        <li>Persistent swelling (seroma)</li>
        <li>Possible need for revision surgery</li>
      </ul>
    </div>
  ),

  // --- OTOPLASTY CONTENT ---
  "otoplasty-what": (
    <div className="space-y-4">
      <p><strong>Otoplasty</strong>, commonly known as cosmetic ear surgery, is a procedure to change the shape, position, or size of the ears. It is most often performed to correct protruding ears by &ldquo;pinning&rdquo; them closer to the head, but it can also be used to reshape oversized ears or correct deformities from injury or birth defects.</p>
    </div>
  ),
  "otoplasty-procedure": (
    <div className="space-y-4">
      <p>The surgery is typically performed with an incision on the back surface of the ear. This allows the surgeon to access and sculpt the ear cartilage, creating the desired folds and contours. Internal, permanent stitches are used to secure the cartilage in its new position. Excess skin is removed, and the incision is closed. Because the incisions are made in the natural crease behind the ear, the resulting scars are well-concealed.</p>
    </div>
  ),
  "otoplasty-candidates": (
     <div className="space-y-4">
      <p>Otoplasty can be performed on both children and adults. For children, it&apos;s best to wait until the ears have reached at least 90% of their adult size, which is typically after the age of five. Ideal candidates of any age should be in good general health, be non-smokers, and have a positive outlook and specific, realistic goals for the surgery&apos;s outcome.</p>
    </div>
  ),
  "otoplasty-recovery": (
     <div className="space-y-4">
      <p>After the procedure, the ears will be covered in bandages for protection. Once these are removed, you will need to wear a supportive headband, especially at night, for several weeks to protect the ears as they heal. Most patients can return to work or school within about a week. Strenuous activities and contact sports should be avoided for at least a month.</p>
    </div>
  ),

  // --- ARM LIFT CONTENT ---
  "arm-lift-what": (
    <div className="space-y-4">
      <p>An <strong>Arm Lift</strong>, or Brachioplasty, is a surgical procedure that reshapes the underside of the upper arm, from the armpit to the elbow. It is designed to address &ldquo;bat wings&rdquo;—the loose, sagging skin that can develop due to aging, genetics, or significant weight loss.</p>
      <p>The procedure removes excess skin and fat, resulting in a smoother, more toned, and proportionate arm contour.</p>
    </div>
  ),
  "arm-lift-procedure": (
    <div className="space-y-4">
      <p>The incision length and pattern depend on the amount and location of excess skin to be removed. Incisions are generally placed on the inside or back of the arm and may extend from the armpit to just above the elbow. Through this incision, the surgeon tightens the underlying supportive tissue and removes excess skin and fat, often with the assistance of liposuction for better contouring.</p>
    </div>
  ),
  "arm-lift-candidates": (
     <div className="space-y-4">
      <p>Ideal candidates are adults with significant upper arm skin laxity who have a relatively stable weight and are not significantly overweight. It is important for patients to be in good general health, be non-smokers, and have realistic expectations about the resulting scars.</p>
    </div>
  ),
  "arm-lift-recovery": (
     <div className="space-y-4">
      <p>Following surgery, your arms will be wrapped in bandages or compression garments to minimize swelling. Recovery typically involves some soreness and bruising. Most patients can return to work and light activities within 1-2 weeks. Strenuous exercise, especially involving the arms and upper body, must be avoided for at least 4-6 weeks to allow the incisions to heal properly. The scars are permanent but will fade significantly over time.</p>
    </div>
  ),

  // --- THIGH LIFT CONTENT ---
  "thigh-lift-what": (
    <div className="space-y-4">
      <p>A <strong>Thigh Lift</strong> is a surgical procedure designed to reshape the thighs by removing excess skin and fat. It is particularly effective for individuals who are left with loose, sagging skin on their inner or outer thighs after significant weight loss or due to the effects of aging.</p>
      <p>The goal is to create a firmer, more youthful, and more proportionate thigh contour, improving the overall silhouette of the lower body.</p>
    </div>
  ),
  "thigh-lift-procedure": (
    <div className="space-y-4">
      <p>Incisions are strategically placed to be as concealed as possible, typically in the groin crease for an inner thigh lift. Depending on the extent of skin removal required, the incision may extend downward along the inseam of the thigh. The underlying tissue is reshaped and tightened, the skin is re-draped over the new contour, and excess skin is trimmed away. Liposuction is often used in conjunction to remove excess fat.</p>
    </div>
  ),
  "thigh-lift-candidates": (
     <div className="space-y-4">
      <p>Ideal candidates are adults whose weight is relatively stable and who are bothered by the appearance of loose, sagging skin on their thighs. Patients should be in good general health, non-smokers, and have realistic expectations regarding scarring, as the incisions can be significant.</p>
    </div>
  ),
  "thigh-lift-recovery": (
     <div className="space-y-4">
      <p>Recovery involves wearing a compression garment to support the tissues and reduce swelling. Walking is encouraged soon after surgery, but strenuous activities and exercise must be avoided for 6-8 weeks. Most patients can return to a desk job within 2-3 weeks. Swelling can persist for several months, but the initial improved contour will be immediately apparent.</p>
    </div>
  ),

  // --- GENITAL REJUVENATION CONTENT ---
  "genital-rejuvenation-what": (
    <div className="space-y-4">
      <p><strong>Genital Rejuvenation</strong> refers to a group of cosmetic procedures designed to enhance the aesthetic appearance of the female genitalia. The most common of these procedures is Labiaplasty, which alters the size or shape of the labia minora.</p>
      <p>These procedures are chosen by women for various reasons, including to alleviate physical discomfort during exercise or intercourse, to improve symmetry, or to boost self-confidence.</p>
    </div>
  ),
  "genital-rejuvenation-procedure": (
    <div className="space-y-4">
      <p>Labiaplasty is typically performed under local or general anesthesia. The surgeon carefully removes excess tissue from the labia minora using precise techniques to create a more symmetrical and aesthetically pleasing result. The incisions are closed with dissolvable sutures, and scarring is usually minimal and well-concealed within the natural folds of the tissue.</p>
    </div>
  ),
  "genital-rejuvenation-candidates": (
     <div className="space-y-4">
      <p>Ideal candidates are adult women who are in good general health and have specific cosmetic or functional concerns about the appearance of their labia. It&apos;s a personal decision made by women who experience discomfort or self-consciousness. Patients should have realistic expectations about the outcome.</p>
    </div>
  ),
  "genital-rejuvenation-recovery": (
     <div className="space-y-4">
      <p>Recovery involves some swelling, bruising, and discomfort for the first week, which can be managed with medication. Patients are advised to wear loose-fitting clothing and avoid strenuous activities, exercise, and sexual intercourse for approximately 4 to 6 weeks to allow for proper healing. Most women can return to work within a few days to a week.</p>
    </div>
  ),

  // --- SCAR REMOVAL CONTENT ---
  "scar-removal-what": (
    <div className="space-y-4">
      <p><strong>Scar Removal</strong> refers to a range of advanced dermatological and surgical treatments designed to minimize the appearance of scars. While no scar can be completely erased, modern techniques can significantly improve their texture, color, and overall visibility.</p>
      <p>Whether your scar is the result of an injury, a previous surgery, acne, or burns, we offer a personalized treatment plan to achieve the best possible aesthetic outcome.</p>
    </div>
  ),
  "scar-removal-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Treatment Options</h3>
      <p>The best treatment depends on the type, size, and location of your scar. Our specialists may recommend one or a combination of the following:</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Laser Scar Revision:</strong> Uses focused light energy to remove the outer layer of the skin&apos;s surface, stimulating new, healthy skin cell growth and improving texture and pigmentation.</li>
        <li><strong>Surgical Scar Revision:</strong> A surgical procedure to remove the old scar and re-close the incision with meticulous techniques to create a less conspicuous scar. This is often used for wide or raised scars.</li>
        <li><strong>Microneedling (Collagen Induction Therapy):</strong> Uses fine needles to create micro-injuries in the skin, which triggers the body&apos;s natural collagen and elastin production to heal and resurface the scar.</li>
        <li><strong>Chemical Peels:</strong> Apply a chemical solution to the skin, which causes it to exfoliate and eventually peel off, revealing smoother, less-scarred skin underneath.</li>
      </ul>
    </div>
  ),
  "scar-removal-candidates": (
     <div className="space-y-4">
      <p>Ideal candidates are non-smoking individuals in good health who are bothered by the appearance of a scar and have realistic expectations about the degree of improvement that can be achieved. It is important that the original wound is fully healed before beginning treatment.</p>
    </div>
  ),
  "scar-removal-recovery": (
     <div className="space-y-4">
      <p>Recovery varies greatly depending on the treatment. For laser treatments and chemical peels, you can expect redness and peeling for several days. For microneedling, recovery is typically 1-3 days of mild redness. For surgical scar revision, recovery involves caring for a new incision, with activity restrictions for a few weeks. Multiple sessions are often required for non-surgical treatments to achieve optimal results.</p>
    </div>
  ),

  // --- MOLE REMOVAL CONTENT ---
  "mole-removal-what": (
    <div className="space-y-4">
      <p><strong>Mole Removal</strong> is a common dermatological procedure to remove moles (nevi) from the skin. This is done for one of two primary reasons: for cosmetic purposes if a person is unhappy with a mole&apos;s appearance, or for medical reasons if a mole shows signs of being cancerous (melanoma).</p>
      <p>Our specialists use precise techniques to ensure effective removal with minimal scarring.</p>
    </div>
  ),
  "mole-removal-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Removal Methods</h3>
      <p>The method used depends on the mole&apos;s size, location, and whether it is suspicious. All procedures are performed under local anesthesia.</p>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>Surgical Excision:</strong> The entire mole and a small margin of surrounding skin are cut out with a scalpel. The incision is then closed with stitches. This is the standard method for suspicious moles as it allows the entire lesion to be sent for biopsy.</li>
        <li><strong>Shave Excision:</strong> The mole is shaved off at the skin level using a surgical blade. Stitches are not required. This is typically used for raised, non-cancerous moles.</li>
        <li><strong>Laser Removal:</strong> A focused laser is used to break down the pigment within the mole. This method is best for small, flat, non-cancerous moles and does not require incisions or stitches.</li>
      </ul>
    </div>
  ),
  "mole-removal-candidates": (
     <div className="space-y-4">
      <p>Almost anyone who wishes to have a mole removed is a candidate. It is crucial, however, that any mole with irregular features (asymmetry, irregular border, changing color, large diameter) be evaluated by a dermatologist before cosmetic removal to rule out skin cancer.</p>
    </div>
  ),
  "mole-removal-recovery": (
     <div className="space-y-4">
      <p>Recovery is very quick and straightforward. For excisions with stitches, the area is kept covered with a bandage, and stitches are removed in about a week. For shave excisions and laser removal, a small scab will form and fall off within one to two weeks. It is important to protect the healing area from the sun to prevent hyperpigmentation.</p>
    </div>
  ),

  // --- PENIS ENLARGEMENT CONTENT ---
  "penis-enlargement-what": (
    <div className="space-y-4">
      <p><strong>Penile Enlargement</strong> refers to a set of procedures designed to increase the length or girth of the penis. These are elective cosmetic procedures for men who are self-conscious about their penis size and are seeking to improve their self-confidence. It is important for patients to have realistic expectations, as these procedures provide modest, not dramatic, changes.</p>
    </div>
  ),
  "penis-enlargement-procedure": (
    <div className="space-y-4">
      <h3 className="font-bold text-lg">Common Techniques</h3>
      <ul className="list-disc list-inside space-y-2">
        <li><strong>For Increased Length (Ligamentolysis):</strong> This is the most common surgical method for increasing flaccid length. It involves cutting the suspensory ligament that attaches the penis to the pubic bone, allowing a greater portion of the penile shaft to become visible externally. This does not increase erect length.</li>
        <li><strong>For Increased Girth (Fat Transfer):</strong> This procedure, also known as autologous fat injection, increases the circumference of the penis. Fat is harvested from another part of the body (like the abdomen or thighs) via liposuction, purified, and then carefully injected into the penile shaft.</li>
      </ul>
    </div>
  ),
  "penis-enlargement-candidates": (
     <div className="space-y-4">
      <p>Ideal candidates are adult men in good general health who are non-smokers and are psychologically stable. It is crucial that candidates have realistic expectations about the achievable results. A thorough consultation, which may include a psychological evaluation, is necessary to ensure the patient is a suitable candidate.</p>
    </div>
  ),
  "penis-enlargement-recovery": (
     <div className="space-y-4">
      <p>Recovery involves swelling, bruising, and discomfort for several weeks. Patients must abstain from all sexual activity, including masturbation, for 4 to 6 weeks to allow for proper healing and to ensure the survival of the fat grafts (for girth enhancement). A specific aftercare regimen, including massages, may be prescribed. Most patients can return to work within a week.</p>
    </div>
  ),
};






