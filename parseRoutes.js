import fs from "fs";

const rawFile = "C:/Users/DELL/.gemini/antigravity/brain/6722ed5b-ea44-4de9-bc66-d5abe9e0c6e2/.system_generated/steps/16/content.md";
const content = fs.readFileSync(rawFile, "utf-8");

// Regex to capture table rows
// <tr><td class="sno">	1	</td>  <td class="rno">	1	</td>  <td class="rname">	Ennore	</td>                             <td class="time">	<a href="../routes/n01.php">Boarding Points </a></td> 	<td class="start1">	5.40 am	</td> </tr>
const rowRegex = /<tr>\s*<td class="sno">\s*(\d+)\s*<\/td>\s*<td class="rno">\s*([^<]+?)\s*<\/td>\s*<td class="rname">\s*([^<]+?)\s*<\/td>\s*<td class="time">\s*<a href="([^"]+)">[^<]*<\/a>\s*<\/td>\s*<td class="start1">\s*([^<]+?)\s*<\/td>\s*<\/tr>/g;

let match;
const parsedRoutes = [];

while ((match = rowRegex.exec(content)) !== null) {
  const sno = parseInt(match[1].trim(), 10);
  const rno = match[2].trim();
  const rname = match[3].trim().replace(/\s+/g, " ");
  const link = match[4].trim();
  const rawTime = match[5].trim().replace(/\./g, ":").toUpperCase();

  parsedRoutes.push({
    sno,
    rno,
    rname,
    link,
    startingTime: rawTime,
  });
}

console.log(`Successfully extracted ${parsedRoutes.length} routes.`);
fs.writeFileSync("./extractedRoutes.json", JSON.stringify(parsedRoutes, null, 2));
