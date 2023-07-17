import { Injectable } from '@angular/core';
import { Person } from '../person.model';


@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  private people: Person[] = [
    { name: 'John Doe', age: 30 },
    { name: 'Jane Smith', age: 25 },
    { name: 'Robert Johnson', age: 35 },
    {
      "name": "Nicholas Lee",
      "age": 35
    },
    {
      "name": "Vivian Walker",
      "age": 27
    },
    {
      "name": "Sophia Evans",
      "age": 37
    },
    {
      "name": "Brody Smith",
      "age": 39
    },
    {
      "name": "Claire Moore",
      "age": 50
    },
    {
      "name": "Mason Clark",
      "age": 24
    },
    {
      "name": "Scarlett Taylor",
      "age": 33
    },
    {
      "name": "Aiden Hernandez",
      "age": 59
    },
    {
      "name": "Hazel Martin",
      "age": 54
    },
    {
      "name": "Lucas Scott",
      "age": 46
    },
    {
      "name": "Evelyn Thompson",
      "age": 19
    },
    {
      "name": "Eliana Adams",
      "age": 54
    },
    {
      "name": "Lucas Martinez",
      "age": 45
    },
    {
      "name": "Avery Allen",
      "age": 26
    },
    {
      "name": "Isabella Jackson",
      "age": 47
    },
    {
      "name": "Aria Phillips",
      "age": 50
    },
    {
      "name": "Aria Davis",
      "age": 35
    },
    {
      "name": "Carter Turner",
      "age": 61
    },
    {
      "name": "Aiden Lee",
      "age": 49
    },
    {
      "name": "Riley Garcia",
      "age": 32
    },
    {
      "name": "Zoey Scott",
      "age": 24
    },
    {
      "name": "Oliver Davis",
      "age": 36
    },
    {
      "name": "Chloe Williams",
      "age": 39
    },
    {
      "name": "Evelyn Lewis",
      "age": 64
    },
    {
      "name": "Levi Thomas",
      "age": 29
    },
    {
      "name": "Ella Johnson",
      "age": 50
    },
    {
      "name": "Mateo Wilson",
      "age": 20
    },
    {
      "name": "Scarlett Hernandez",
      "age": 60
    },
    {
      "name": "Mia Adams",
      "age": 31
    },
    {
      "name": "Ethan Johnson",
      "age": 54
    },
    {
      "name": "Leah Allen",
      "age": 19
    },
    {
      "name": "Andrew Mitchell",
      "age": 46
    },
    {
      "name": "Samuel Lee",
      "age": 34
    },
    {
      "name": "Layla Taylor",
      "age": 19
    },
    {
      "name": "Logan Martinez",
      "age": 44
    },
    {
      "name": "Gabriel Scott",
      "age": 39
    },
    {
      "name": "Isabella Wilson",
      "age": 63
    },
    {
      "name": "Aurora Hall",
      "age": 31
    },
    {
      "name": "Chloe Mitchell",
      "age": 28
    },
    {
      "name": "Henry Allen",
      "age": 58
    },
    {
      "name": "Emilia Turner",
      "age": 64
    },
    {
      "name": "Caleb Thomas",
      "age": 25
    },
    {
      "name": "Nora Clark",
      "age": 45
    },
    {
      "name": "Anthony Smith",
      "age": 18
    },
    {
      "name": "Emilia Wilson",
      "age": 20
    },
    {
      "name": "Elizabeth Martinez",
      "age": 31
    },
    {
      "name": "Carter Martinez",
      "age": 36
    },
    {
      "name": "Eliana Garcia",
      "age": 56
    },
    {
      "name": "Landon Williams",
      "age": 31
    },
    {
      "name": "Claire Robinson",
      "age": 53
    },
    {
      "name": "Aurora Thomas",
      "age": 48
    },
    {
      "name": "Luna Lewis",
      "age": 33
    },
    {
      "name": "Ella Clark",
      "age": 60
    },
    {
      "name": "Sofia Turner",
      "age": 40
    },
    {
      "name": "Aria Allen",
      "age": 22
    },
    {
      "name": "Lucas Robinson",
      "age": 60
    },
    {
      "name": "Isaac Johnson",
      "age": 30
    },
    {
      "name": "Logan Martinez",
      "age": 54
    },
    {
      "name": "Carter Moore",
      "age": 50
    },
    {
      "name": "Oliver Hall",
      "age": 52
    },
    {
      "name": "Levi Davis",
      "age": 37
    },
    {
      "name": "Emilia Mitchell",
      "age": 19
    },
    {
      "name": "Owen Adams",
      "age": 34
    },
    {
      "name": "Elijah Adams",
      "age": 36
    },
    {
      "name": "Joseph White",
      "age": 39
    },
    {
      "name": "Lucas Wilson",
      "age": 59
    },
    {
      "name": "Madison Hall",
      "age": 30
    },
    {
      "name": "Zoey Williams",
      "age": 45
    },
    {
      "name": "Noah Anderson",
      "age": 54
    },
    {
      "name": "Nathan Mitchell",
      "age": 23
    },
    {
      "name": "Zoe Wilson",
      "age": 53
    },
    {
      "name": "Scarlett Clark",
      "age": 35
    },
    {
      "name": "Daniel Turner",
      "age": 39
    },
    {
      "name": "Isabella Walker",
      "age": 60
    },
    {
      "name": "Nathan Johnson",
      "age": 46
    },
    {
      "name": "Levi Turner",
      "age": 38
    },
    {
      "name": "Nathan Walker",
      "age": 31
    },
    {
      "name": "Levi Davis",
      "age": 35
    },
    {
      "name": "Mia Wilson",
      "age": 27
    },
    {
      "name": "Ella Johnson",
      "age": 29
    },
    {
      "name": "Lucas Martinez",
      "age": 64
    },
    {
      "name": "Riley Smith",
      "age": 62
    },
    {
      "name": "Aiden Wilson",
      "age": 41
    },
    {
      "name": "Emma Adams",
      "age": 47
    },
    {
      "name": "Grace Martin",
      "age": 43
    },
    {
      "name": "Jane Doe",
      "age": 24
    },
    {
      "name": "John Smith",
      "age": 38
    },
    {
      "name": "Emily Johnson",
      "age": 42
    },
    {
      "name": "Michael Williams",
      "age": 59
    },
    {
      "name": "Olivia Davis",
      "age": 25
    },
    {
      "name": "James Miller",
      "age": 43
    },
    {
      "name": "Sophia Wilson",
      "age": 28
    },
    {
      "name": "William Taylor",
      "age": 33
    },
    {
      "name": "Ava Martinez",
      "age": 52
    },
    {
      "name": "Alexander Anderson",
      "age": 30
    },
    {
      "name": "Charlotte Brown",
      "age": 20
    },
    {
      "name": "Mason Clark",
      "age": 35
    },
    {
      "name": "Amelia Scott",
      "age": 42
    },
    {
      "name": "Elijah Johnson",
      "age": 47
    },
    {
      "name": "Harper Thomas",
      "age": 21
    },
    {
      "name": "Ethan Garcia",
      "age": 60
    },
    {
      "name": "Liam Hernandez",
      "age": 49
    },
    {
      "name": "Evelyn Hall",
      "age": 37
    },
    {
      "name": "Oliver Turner",
      "age": 41
    },
    {
      "name": "Abigail Adams",
      "age": 50
    },
    {
      "name": "Emma Martin",
      "age": 29
    },
    {
      "name": "Aiden White",
      "age": 24
    },
    {
      "name": "Mia Lewis",
      "age": 27
    },
    {
      "name": "Avery Moore",
      "age": 56
    },
    {
      "name": "Lucas Mitchell",
      "age": 60
    },
    {
      "name": "Sofia Perez",
      "age": 41
    },
    {
      "name": "Jackson Turner",
      "age": 54
    },
    {
      "name": "Camila Johnson",
      "age": 26
    },
    {
      "name": "Logan Lewis",
      "age": 19
    },
    {
      "name": "Scarlett Clark",
      "age": 43
    },
    {
      "name": "Aria Phillips",
      "age": 33
    },
    {
      "name": "Chloe Wright",
      "age": 18
    },
    {
      "name": "Benjamin Evans",
      "age": 30
    },
    {
      "name": "Grace Thompson",
      "age": 61
    },
    {
      "name": "Mateo Wilson",
      "age": 60
    },
    {
      "name": "Riley Rodriguez",
      "age": 64
    },
    {
      "name": "Zoey King",
      "age": 50
    },
    {
      "name": "Luna Lee",
      "age": 27
    },
    {
      "name": "Carter Taylor",
      "age": 61
    },
    {
      "name": "Hannah Lewis",
      "age": 48
    },
    {
      "name": "Sebastian Davis",
      "age": 33
    },
    {
      "name": "Penelope Johnson",
      "age": 62
    },
    {
      "name": "Henry Martinez",
      "age": 22
    },
    {
      "name": "Stella Scott",
      "age": 49
    },
    {
      "name": "Daniel Turner",
      "age": 36
    },
    {
      "name": "Layla Thompson",
      "age": 19
    },
    {
      "name": "Gabriel Clark",
      "age": 29
    },
    {
      "name": "Violet Lee",
      "age": 62
    },
    {
      "name": "Madison Harris",
      "age": 31
    },
    {
      "name": "Joshua Adams",
      "age": 53
    },
    {
      "name": "Leah Walker",
      "age": 25
    },
    {
      "name": "Samuel Thomas",
      "age": 48
    },
    {
      "name": "Nora Anderson",
      "age": 40
    },
    {
      "name": "Anthony Smith",
      "age": 47
    },
    {
      "name": "Ellie Turner",
      "age": 32
    },
    {
      "name": "Isaac White",
      "age": 46
    },
    {
      "name": "Vivian Thomas",
      "age": 61
    },
    {
      "name": "Joseph Williams",
      "age": 55
    },
    {
      "name": "Eliana Scott",
      "age": 60
    },
    {
      "name": "Nova Davis",
      "age": 52
    },
    {
      "name": "Aria Thompson",
      "age": 30
    },
    {
      "name": "Axel Clark",
      "age": 52
    },
    {
      "name": "Madelyn King",
      "age": 25
    },
    {
      "name": "Landon Turner",
      "age": 42
    },
    {
      "name": "Emilia Lewis",
      "age": 59
    },
    {
      "name": "Joseph Moore",
      "age": 42
    },
    {
      "name": "Aaliyah Hall",
      "age": 63
    },
    {
      "name": "David Scott",
      "age": 34
    },
    {
      "name": "Nova Lewis",
      "age": 21
    },
    {
      "name": "Brandon Wright",
      "age": 39
    },
    {
      "name": "Liliana Harris",
      "age": 30
    },
    {
      "name": "Gabriel Robinson",
      "age": 53
    },
    {
      "name": "Aria King",
      "age": 36
    },
    {
      "name": "Nicholas Clark",
      "age": 62
    },
    {
      "name": "Vivian Walker",
      "age": 60
    },
    {
      "name": "Sophia Evans",
      "age": 49
    },
    {
      "name": "Brody Smith",
      "age": 41
    },
    {
      "name": "Claire Moore",
      "age": 53
    },
    {
      "name": "Mason Clark",
      "age": 21
    },
    {
      "name": "Scarlett Taylor",
      "age": 52
    },
    {
      "name": "Aiden Hernandez",
      "age": 18
    },
    {
      "name": "Hazel Martin",
      "age": 62
    },
    {
      "name": "Lucas Scott",
      "age": 42
    },
    {
      "name": "Evelyn Thompson",
      "age": 59
    },
    {
      "name": "Eliana Adams",
      "age": 27
    },
    {
      "name": "Lucas Martinez",
      "age": 59
    },
    {
      "name": "Avery Allen",
      "age": 26
    },
    {
      "name": "Isabella Jackson",
      "age": 22
    },
    {
      "name": "Aria Phillips",
      "age": 61
    },
    {
      "name": "Aria Davis",
      "age": 30
    },
    {
      "name": "Carter Turner",
      "age": 42
    },
    {
      "name": "Aiden Lee",
      "age": 28
    },
    {
      "name": "Riley Garcia",
      "age": 37
    },
    {
      "name": "Zoey Scott",
      "age": 22
    },
    {
      "name": "Oliver Davis",
      "age": 41
    },
    {
      "name": "Chloe Williams",
      "age": 47
    },
    {
      "name": "Evelyn Lewis",
      "age": 46
    },
    {
      "name": "Levi Thomas",
      "age": 21
    },
    {
      "name": "Ella Johnson",
      "age": 24
    },
    {
      "name": "Mateo Wilson",
      "age": 23
    },
    {
      "name": "Scarlett Hernandez",
      "age": 25
    },
    {
      "name": "Mia Adams",
      "age": 28
    },
    {
      "name": "Ethan Johnson",
      "age": 41
    },
    {
      "name": "Leah Allen",
      "age": 56
    },
    {
      "name": "Andrew Mitchell",
      "age": 45
    },
    {
      "name": "Samuel Lee",
      "age": 22
    },
    {
      "name": "Layla Taylor",
      "age": 21
    },
    {
      "name": "Logan Martinez",
      "age": 45
    },
    {
      "name": "Gabriel Scott",
      "age": 38
    },
    {
      "name": "Isabella Wilson",
      "age": 40
    },
    {
      "name": "Aurora Hall",
      "age": 41
    },
    {
      "name": "Chloe Mitchell",
      "age": 59
    },
    {
      "name": "Henry Allen",
      "age": 52
    },
    {
      "name": "Emilia Turner",
      "age": 62
    },
    {
      "name": "Caleb Thomas",
      "age": 41
    },
    {
      "name": "Nora Clark",
      "age": 50
    },
    {
      "name": "Anthony Smith",
      "age": 54
    },
    {
      "name": "Emilia Wilson",
      "age": 42
    },
    {
      "name": "Elizabeth Martinez",
      "age": 39
    },
    {
      "name": "Carter Martinez",
      "age": 48
    },
    {
      "name": "Eliana Garcia",
      "age": 47
    },
    {
      "name": "Landon Williams",
      "age": 55
    },
    {
      "name": "Claire Robinson",
      "age": 40
    },
    {
      "name": "Aurora Thomas",
      "age": 40
    },
    {
      "name": "Luna Lewis",
      "age": 22
    },
    {
      "name": "Ella Clark",
      "age": 58
    },
    {
      "name": "Sofia Turner",
      "age": 24
    },
    {
      "name": "Aria Allen",
      "age": 36
    },
    {
      "name": "Lucas Robinson",
      "age": 55
    },
    {
      "name": "Isaac Johnson",
      "age": 26
    },
    {
      "name": "Logan Martinez",
      "age": 18
    },
    {
      "name": "Carter Moore",
      "age": 41
    },
    {
      "name": "Oliver Hall",
      "age": 25
    },
    {
      "name": "Levi Davis",
      "age": 42
    },
    {
      "name": "Emilia Mitchell",
      "age": 20
    },
    {
      "name": "Owen Adams",
      "age": 31
    },
    {
      "name": "Elijah Adams",
      "age": 30
    },
    {
      "name": "Joseph White",
      "age": 44
    },
    {
      "name": "Lucas Wilson",
      "age": 56
    },
    {
      "name": "Madison Hall",
      "age": 55
    },
    {
      "name": "Zoey Williams",
      "age": 33
    },
    {
      "name": "Noah Anderson",
      "age": 60
    },
    {
      "name": "Nathan Mitchell",
      "age": 59
    },
    {
      "name": "Zoe Wilson",
      "age": 35
    },
    {
      "name": "Scarlett Clark",
      "age": 44
    },
    {
      "name": "Daniel Turner",
      "age": 57
    },
    {
      "name": "Isabella Walker",
      "age": 43
    },
    {
      "name": "Nathan Johnson",
      "age": 22
    },
    {
      "name": "Levi Turner",
      "age": 50
    },
    {
      "name": "Nathan Walker",
      "age": 43
    },
    {
      "name": "Levi Davis",
      "age": 45
    },
    {
      "name": "Mia Wilson",
      "age": 23
    },
    {
      "name": "Ella Johnson",
      "age": 59
    },
    {
      "name": "Lucas Martinez",
      "age": 37
    },
    {
      "name": "Riley Smith",
      "age": 38
    },
    {
      "name": "Aiden Wilson",
      "age": 26
    },
    {
      "name": "Emma Adams",
      "age": 61
    },
    {
      "name": "Grace Martin",
      "age": 34
    },
    {
      "name": "Joseph Moore",
      "age": 49
    },
    {
      "name": "Aaliyah Hall",
      "age": 27
    },
    {
      "name": "David Scott",
      "age": 59
    },
    {
      "name": "Nova Lewis",
      "age": 43
    },
    {
      "name": "Brandon Wright",
      "age": 29
    },
    {
      "name": "Liliana Harris",
      "age": 63
    },
    {
      "name": "Gabriel Robinson",
      "age": 48
    },
    {
      "name": "Aria King",
      "age": 26
    },
    {
      "name": "Nicholas Clark",
      "age": 55
    },
    {
      "name": "Vivian Walker",
      "age": 28
    },
    {
      "name": "Sophia Evans",
      "age": 43
    },
    {
      "name": "Brody Smith",
      "age": 52
    },
    {
      "name": "Claire Moore",
      "age": 20
    },
    {
      "name": "Mason Clark",
      "age": 33
    },
    {
      "name": "Scarlett Taylor",
      "age": 32
    },
    {
      "name": "Aiden Hernandez",
      "age": 56
    },
    {
      "name": "Hazel Martin",
      "age": 63
    },
    {
      "name": "Lucas Scott",
      "age": 32
    },
    {
      "name": "Evelyn Thompson",
      "age": 29
    },
    {
      "name": "Eliana Adams",
      "age": 60
    },
    {
      "name": "Lucas Martinez",
      "age": 52
    },
    {
      "name": "Avery Allen",
      "age": 56
    },
    {
      "name": "Isabella Jackson",
      "age": 57
    },
    {
      "name": "Aria Phillips",
      "age": 46
    },
    {
      "name": "Aria Davis",
      "age": 47
    },
    {
      "name": "Carter Turner",
      "age": 59
    },
    {
      "name": "Aiden Lee",
      "age": 31
    },
    {
      "name": "Riley Garcia",
      "age": 38
    },
    {
      "name": "Zoey Scott",
      "age": 30
    },
    {
      "name": "Oliver Davis",
      "age": 50
    },
    {
      "name": "Chloe Williams",
      "age": 43
    },
    {
      "name": "Evelyn Lewis",
      "age": 37
    },
    {
      "name": "Levi Thomas",
      "age": 18
    },
    {
      "name": "Ella Johnson",
      "age": 35
    },
    {
      "name": "Mateo Wilson",
      "age": 62
    },
    {
      "name": "Scarlett Hernandez",
      "age": 30
    },
    {
      "name": "Mia Adams",
      "age": 62
    },
    {
      "name": "Ethan Johnson",
      "age": 61
    },
    {
      "name": "Leah Allen",
      "age": 49
    },
    {
      "name": "Andrew Mitchell",
      "age": 30
    },
    {
      "name": "Samuel Lee",
      "age": 28
    },
    {
      "name": "Layla Taylor",
      "age": 33
    },
    {
      "name": "Logan Martinez",
      "age": 49
    },
    {
      "name": "Gabriel Scott",
      "age": 18
    },
    {
      "name": "Isabella Wilson",
      "age": 29
    },
    {
      "name": "Aurora Hall",
      "age": 33
    },
    {
      "name": "Chloe Mitchell",
      "age": 20
    },
    {
      "name": "Henry Allen",
      "age": 58
    },
    {
      "name": "Emilia Turner",
      "age": 34
    },
    {
      "name": "Caleb Thomas",
      "age": 35
    },
    {
      "name": "Nora Clark",
      "age": 37
    },
    {
      "name": "Anthony Smith",
      "age": 25
    },
    {
      "name": "Emilia Wilson",
      "age": 58
    },
    {
      "name": "Elizabeth Martinez",
      "age": 41
    },
    {
      "name": "Carter Martinez",
      "age": 47
    },
    {
      "name": "Eliana Garcia",
      "age": 53
    },
    {
      "name": "Landon Williams",
      "age": 26
    },
    {
      "name": "Claire Robinson",
      "age": 47
    },
    {
      "name": "Aurora Thomas",
      "age": 47
    },
    {
      "name": "Luna Lewis",
      "age": 39
    },
    {
      "name": "Ella Clark",
      "age": 58
    },
    {
      "name": "Sofia Turner",
      "age": 30
    },
    {
      "name": "Aria Allen",
      "age": 34
    },
    {
      "name": "Lucas Robinson",
      "age": 18
    },
    {
      "name": "Isaac Johnson",
      "age": 34
    },
    {
      "name": "Logan Martinez",
      "age": 63
    },
    {
      "name": "Carter Moore",
      "age": 60
    },
    {
      "name": "Oliver Hall",
      "age": 48
    },
    {
      "name": "Levi Davis",
      "age": 47
    },
    {
      "name": "Emilia Mitchell",
      "age": 34
    },
    {
      "name": "Owen Adams",
      "age": 37
    },
    {
      "name": "Elijah Adams",
      "age": 32
    },
    {
      "name": "Joseph White",
      "age": 30
    },
    {
      "name": "Lucas Wilson",
      "age": 50
    },
    {
      "name": "Madison Hall",
      "age": 43
    },
    {
      "name": "Zoey Williams",
      "age": 34
    },
    {
      "name": "Noah Anderson",
      "age": 33
    },
    {
      "name": "Nathan Mitchell",
      "age": 59
    },
    {
      "name": "Zoe Wilson",
      "age": 44
    },
    {
      "name": "Scarlett Clark",
      "age": 24
    },
    {
      "name": "Daniel Turner",
      "age": 37
    },
    {
      "name": "Isabella Walker",
      "age": 24
    },
    {
      "name": "Nathan Johnson",
      "age": 23
    },
    {
      "name": "Levi Turner",
      "age": 37
    },
    {
      "name": "Nathan Walker",
      "age": 30
    },
    {
      "name": "Levi Davis",
      "age": 48
    },
    {
      "name": "Mia Wilson",
      "age": 27
    },
    {
      "name": "Ella Johnson",
      "age": 26
    },
    {
      "name": "Lucas Martinez",
      "age": 57
    },
    {
      "name": "Riley Smith",
      "age": 39
    },
    {
      "name": "Aiden Wilson",
      "age": 63
    },
    {
      "name": "Emma Adams",
      "age": 36
    },
    {
      "name": "Grace Martin",
      "age": 61
    },
    {
      "name": "Joseph Moore",
      "age": 46
    },
    {
      "name": "Aaliyah Hall",
      "age": 41
    },
    {
      "name": "David Scott",
      "age": 34
    },
    {
      "name": "Nova Lewis",
      "age": 53
    },
    {
      "name": "Brandon Wright",
      "age": 64
    },
    {
      "name": "Liliana Harris",
      "age": 42
    },
    {
      "name": "Gabriel Robinson",
      "age": 61
    },
    {
      "name": "Aria King",
      "age": 18
    },
    {
      "name": "Nicholas Clark",
      "age": 23
    },
    {
      "name": "Vivian Walker",
      "age": 42
    },
    {
      "name": "Sophia Evans",
      "age": 27
    },
    {
      "name": "Brody Smith",
      "age": 45
    },
    {
      "name": "Claire Moore",
      "age": 38
    },
    {
      "name": "Mason Clark",
      "age": 41
    },
    {
      "name": "Scarlett Taylor",
      "age": 54
    },
    {
      "name": "Aiden Hernandez",
      "age": 18
    },
    {
      "name": "Hazel Martin",
      "age": 52
    },
    {
      "name": "Lucas Scott",
      "age": 57
    },
    {
      "name": "Evelyn Thompson",
      "age": 46
    },
    {
      "name": "Eliana Adams",
      "age": 50
    },
    {
      "name": "Lucas Martinez",
      "age": 43
    },
    {
      "name": "Avery Allen",
      "age": 26
    },
    {
      "name": "Isabella Jackson",
      "age": 47
    },
    {
      "name": "Aria Phillips",
      "age": 24
    },
    {
      "name": "Aria Davis",
      "age": 56
    },
    {
      "name": "Carter Turner",
      "age": 60
    },
    {
      "name": "Aiden Lee",
      "age": 24
    },
    {
      "name": "Riley Garcia",
      "age": 47
    },
    {
      "name": "Zoey Scott",
      "age": 19
    },
    {
      "name": "Oliver Davis",
      "age": 19
    },
    {
      "name": "Chloe Williams",
      "age": 25
    },
    {
      "name": "Evelyn Lewis",
      "age": 56
    },
    {
      "name": "Levi Thomas",
      "age": 39
    },
    {
      "name": "Ella Johnson",
      "age": 46
    },
    {
      "name": "Mateo Wilson",
      "age": 53
    },
    {
      "name": "Scarlett Hernandez",
      "age": 24
    },
    {
      "name": "Mia Adams",
      "age": 24
    },
    {
      "name": "Ethan Johnson",
      "age": 23
    },
    {
      "name": "Leah Allen",
      "age": 47
    },
    {
      "name": "Andrew Mitchell",
      "age": 61
    },
    {
      "name": "Samuel Lee",
      "age": 40
    },
    {
      "name": "Layla Taylor",
      "age": 54
    },
    {
      "name": "Logan Martinez",
      "age": 50
    },
    {
      "name": "Gabriel Scott",
      "age": 61
    },
    {
      "name": "Isabella Wilson",
      "age": 61
    },
    {
      "name": "Aurora Hall",
      "age": 39
    },
    {
      "name": "Chloe Mitchell",
      "age": 47
    },
    {
      "name": "Henry Allen",
      "age": 39
    },
    {
      "name": "Emilia Turner",
      "age": 40
    },
    {
      "name": "Caleb Thomas",
      "age": 30
    },
    {
      "name": "Nora Clark",
      "age": 52
    },
    {
      "name": "Anthony Smith",
      "age": 61
    },
    {
      "name": "Emilia Wilson",
      "age": 47
    },
    {
      "name": "Elizabeth Martinez",
      "age": 54
    },
    {
      "name": "Carter Martinez",
      "age": 26
    },
    {
      "name": "Eliana Garcia",
      "age": 40
    },
    {
      "name": "Landon Williams",
      "age": 48
    },
    {
      "name": "Claire Robinson",
      "age": 45
    },
    {
      "name": "Aurora Thomas",
      "age": 24
    },
    {
      "name": "Luna Lewis",
      "age": 57
    },
    {
      "name": "Ella Clark",
      "age": 55
    },
    {
      "name": "Sofia Turner",
      "age": 46
    },
    {
      "name": "Aria Allen",
      "age": 22
    },
    {
      "name": "Lucas Robinson",
      "age": 64
    },
    {
      "name": "Isaac Johnson",
      "age": 53
    },
    {
      "name": "Logan Martinez",
      "age": 33
    },
    {
      "name": "Carter Moore",
      "age": 57
    },
    {
      "name": "Oliver Hall",
      "age": 49
    },
    {
      "name": "Levi Davis",
      "age": 34
    },
    {
      "name": "Emilia Mitchell",
      "age": 33
    },
    {
      "name": "Owen Adams",
      "age": 56
    },
    {
      "name": "Elijah Adams",
      "age": 36
    },
    {
      "name": "Joseph White",
      "age": 54
    },
    {
      "name": "Lucas Wilson",
      "age": 33
    },
    {
      "name": "Madison Hall",
      "age": 33
    },
    {
      "name": "Zoey Williams",
      "age": 47
    },
    {
      "name": "Noah Anderson",
      "age": 40
    },
    {
      "name": "Nathan Mitchell",
      "age": 36
    },
    {
      "name": "Zoe Wilson",
      "age": 35
    },
    {
      "name": "Scarlett Clark",
      "age": 34
    },
    {
      "name": "Daniel Turner",
      "age": 43
    },
    {
      "name": "Isabella Walker",
      "age": 18
    },
    {
      "name": "Nathan Johnson",
      "age": 24
    },
    {
      "name": "Levi Turner",
      "age": 24
    },
    {
      "name": "Nathan Walker",
      "age": 62
    },
    {
      "name": "Levi Davis",
      "age": 32
    },
    {
      "name": "Mia Wilson",
      "age": 54
    },
    {
      "name": "Ella Johnson",
      "age": 52
    },
    {
      "name": "Lucas Martinez",
      "age": 29
    },
    {
      "name": "Riley Smith",
      "age": 42
    },
    {
      "name": "Aiden Wilson",
      "age": 19
    },
    {
      "name": "Emma Adams",
      "age": 54
    },
    {
      "name": "Grace Martin",
      "age": 63
    },
    {
      "name": "Joseph Moore",
      "age": 42
    },
    {
      "name": "Aaliyah Hall",
      "age": 25
    },
    {
      "name": "David Scott",
      "age": 50
    },
    {
      "name": "Nova Lewis",
      "age": 57
    },
    {
      "name": "Brandon Wright",
      "age": 29
    },
    {
      "name": "Liliana Harris",
      "age": 26
    },
    {
      "name": "Gabriel Robinson",
      "age": 38
    },
    {
      "name": "Aria King",
      "age": 50
    },
    {
      "name": "Nicholas Clark",
      "age": 61
    },
    {
      "name": "Vivian Walker",
      "age": 36
    },
    {
      "name": "Sophia Evans",
      "age": 29
    },
    {
      "name": "Brody Smith",
      "age": 40
    },
    {
      "name": "Claire Moore",
      "age": 63
    },
    {
      "name": "Mason Clark",
      "age": 20
    },
    {
      "name": "Scarlett Taylor",
      "age": 50
    },
    {
      "name": "Aiden Hernandez",
      "age": 50
    },
    {
      "name": "Hazel Martin",
      "age": 54
    },
    {
      "name": "Lucas Scott",
      "age": 24
    },
    {
      "name": "Evelyn Thompson",
      "age": 20
    },
    {
      "name": "Eliana Adams",
      "age": 32
    },
    {
      "name": "Lucas Martinez",
      "age": 47
    },
    {
      "name": "Avery Allen",
      "age": 62
    },
    {
      "name": "Isabella Jackson",
      "age": 33
    },
    {
      "name": "Aria Phillips",
      "age": 50
    },
    {
      "name": "Aria Davis",
      "age": 20
    },
    {
      "name": "Carter Turner",
      "age": 47
    },
    {
      "name": "Aiden Lee",
      "age": 18
    },
    {
      "name": "Riley Garcia",
      "age": 46
    },
    {
      "name": "Zoey Scott",
      "age": 41
    },
    {
      "name": "Oliver Davis",
      "age": 63
    },
    {
      "name": "Chloe Williams",
      "age": 42
    },
    {
      "name": "Evelyn Lewis",
      "age": 48
    },
    {
      "name": "Levi Thomas",
      "age": 45
    },
    {
      "name": "Ella Johnson",
      "age": 51
    },
    {
      "name": "Mateo Wilson",
      "age": 41
    },
  
    
      
  ];

  getPeople(): Person[] {
    return this.people;
  }
}
